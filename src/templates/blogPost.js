import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { CategorySVG, TagSVG } from '../components/partials/SVGIcon';

function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { author, lang = 'en', path, tags, title } = frontmatter;
  return (
    <Layout showHeader={false} heading={title}>
      <SEO blog={true} path={path} tags={tags} title={title} />
      <Article
        author={author}
        html={html}
        lang={lang}
        tags={tags}
        title={title}
      />
    </Layout>
  );
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        author
        lang
        path
        tags
        title
      }
    }
  }
`;

function Article({ author, html, lang, tags }) {
  return (
    <article lang={lang} className="entry">
      <div
        className="entry-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Footer author={author} tags={tags} />
    </article>
  );
}

function Footer({ author, tags }) {
  return (
    <footer className="entry-footer-container">
      <div className="entry-footer">
        <div className="categories">
          <span className="taxonomyTerm-icon">
            <CategorySVG />
          </span>
          <span className="screen-reader">Author: </span>
          <Link className="author" to={`/authors/${author}`}>
            {author}
          </Link>
        </div>
        {tags.length ? (
          <div className="tags">
            <span className="taxonomyTerm-icon">
              <TagSVG />
            </span>
            <span className="screen-reader">Tags: </span>
            {tags.map((tag, index) => {
              return (
                <React.Fragment key={tag}>
                  <Link className="tag" to={`/tags/${tag}`}>
                    {tag}
                  </Link>
                  {index < tags.length - 1 ? ', ' : ' '}
                </React.Fragment>
              );
            })}
          </div>
        ) : null}
      </div>
    </footer>
  );
}

export default Template;