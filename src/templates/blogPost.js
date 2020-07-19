import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { CategorySVG, TagSVG } from '../components/partials/SVGIcon';
import { siteMetadata } from '../../gatsby-config';

const { repo } = siteMetadata;

function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const {
    attributed,
    author,
    lang = 'en',
    misattributed,
    path,
    tags,
    title,
    unverified,
  } = frontmatter;
  return (
    <Layout showHeader={false} heading={title}>
      <SEO blog={true} path={path} tags={tags} title={title} />
      <Article
        attributed={attributed}
        author={author}
        html={html}
        lang={lang}
        misattributed={misattributed}
        tags={tags}
        title={title}
        unverified={unverified}
      />
    </Layout>
  );
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        attributed
        author
        lang
        misattributed
        path
        tags
        title
        unverified
      }
    }
  }
`;

function Article({
  attributed,
  author,
  html,
  lang,
  misattributed,
  tags,
  unverified,
}) {
  return (
    <article lang={lang} className="entry">
      <div
        className="entry-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Footer
        attributed={attributed}
        author={author}
        misattributed={misattributed}
        tags={tags}
        unverified={unverified}
      />
    </article>
  );
}

function Footer({ attributed, author, misattributed, tags, unverified }) {
  return (
    <footer className="entry-footer-container">
      <div className="entry-footer">
        <div className="categories">
          <span className="taxonomyTerm-icon">
            <CategorySVG />
          </span>
          <span className="screen-reader">Author: </span>
          <Link className="author" to={`/${repo}/authors/${author}`}>
            {author}
          </Link>
          {attributed ? (
            <span>
              <sup>
                <em>!</em>
              </sup>
            </span>
          ) : null}
          {misattributed ? (
            <span>
              <sup>
                <em>?</em>
              </sup>
            </span>
          ) : null}
          {unverified ? (
            <span>
              <sup>
                <em>#</em>
              </sup>
            </span>
          ) : null}
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
                  <Link className="tag" to={`/${repo}/tags/${tag}`}>
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
