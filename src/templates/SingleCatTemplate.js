import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

function SingleCatTemplate({ pageContext }) {
  const { posts, cat } = pageContext;
  return (
    <Layout heading={`Author: ${cat}`} link="/authors" slug="authors">
      <SEO title={`Author: ${cat}`} />
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
                      <Link to={`/post/${path}`}>{title}</Link>
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

export default SingleCatTemplate;
