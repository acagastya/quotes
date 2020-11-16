import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { siteMetadata } from '../../gatsby-config';

const { repo } = siteMetadata;

function SingleAuthorTemplate({ pageContext }) {
  const { author, posts } = pageContext;
  return (
    <Layout
      heading={`Author: ${author} (${posts.length})`}
      link={`/${repo}/authors`}
      slug="authors"
    >
      <SEO title={`Author: ${author}`} />
      <div className="list-container">
        <ul className="list">
          {posts.map(post => {
            const {
              attributed,
              author,
              misattributed,
              path,
              title,
              unverified,
            } = post.frontmatter;
            return (
              <li key={path} className="list-item">
                <article>
                  <div className="meta">
                    <span>
                      <span className="screen-reader">Quote by </span>
                      <span>
                        <Link to={`/${repo}/authors/${author}`}>{author}</Link>
                        {attributed ? (
                          <span>
                            <sup>
                              <em>
                                <abbr title="Attributed">!</abbr>
                              </em>
                            </sup>
                          </span>
                        ) : null}
                        {misattributed ? (
                          <span>
                            <sup>
                              <em>
                                <abbr title="Misattributed">?</abbr>
                              </em>
                            </sup>
                          </span>
                        ) : null}
                        {unverified ? (
                          <span>
                            <sup>
                              <em>
                                <abbr title="Unverified">#</abbr>
                              </em>
                            </sup>
                          </span>
                        ) : null}
                      </span>
                    </span>
                  </div>
                  <header className="list-item-header">
                    <h3 className="list-item-title">
                      <Link to={`/${repo}/quote${path}`}>{title}</Link>
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

export default SingleAuthorTemplate;
