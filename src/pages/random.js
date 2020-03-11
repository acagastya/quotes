import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

function RandomQuotePage({ data }) {
  const { edges } = data.allMarkdownRemark;
  const rnd = Math.floor(Math.random() * edges.length);
  const { attributed, author, misattributed, path, title, where } = edges[
    rnd
  ].node.frontmatter;

  return (
    <Layout>
      <SEO title="Random Quote" />
      <div className="home-sections-container">
        <div className="home-sections">
          <section id="recent-posts" className="home-section">
            <header>
              <h2 className="home-section-title title">Random Quote</h2>
            </header>
            <div className="list-container">
              <ul className="list">
                <article>
                  <header className="list-item-header">
                    <h3 className="list-item-title">
                      <em>
                        <Link to={`/quote/${path}`}>{title}</Link>
                      </em>
                    </h3>
                    <div className="meta">
                      <span>
                        <span className="screen-reader">Quote by </span>
                        <span className="author-container">
                          <Link
                            className="author-container-link"
                            to={`/author/${author}`}
                          >
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
                          {where ? <span>, {where}</span> : null}
                        </span>
                      </span>
                    </div>
                  </header>
                </article>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query RandomQuoteQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          frontmatter {
            attributed
            author
            misattributed
            path
            title
            where
          }
        }
      }
    }
  }
`;

export default RandomQuotePage;
