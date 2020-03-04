import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

function SingleTagTemplate({ pageContext }) {
  const { posts, tag } = pageContext;
  return (
    <Layout heading={`Tag: ${tag}`} link="/tags" slug="tag">
      <SEO title={`Tag: ${tag}`} />
      <div className="list-container">
        <ul className="list">
          {posts.map(post => {
            const { author, path, title } = post.frontmatter;
            return (
              <li key={path} className="list-item">
                <article>
                  <div className="meta">
                    <span>
                      <span className="screen-reader">Quote by </span>
                      <span>
                        <Link to={`/authors/${author}`}>{author}</Link>
                      </span>
                    </span>
                  </div>
                  <header className="list-item-header">
                    <h3 className="list-item-title">
                      <Link to={`/quote/${path}`}>{title}</Link>
                    </h3>
                  </header>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export default SingleTagTemplate;
