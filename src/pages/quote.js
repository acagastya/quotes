import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { siteMetadata } from '../../gatsby-config';

const { repo } = siteMetadata;

function Blog({ data }) {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout heading={`Quotes (${edges.length})`} slug="quote">
      <SEO title="Quotes" />
      <div className="home-sections-container">
        <div className="home-sections">
          <section id="recent-posts" className="home-section">
            <div className="list-container">
              <ul className="list">
                {edges.map(edge => {
                  const {
                    attributed,
                    author,
                    misattributed,
                    path,
                    title,
                    unverified,
                  } = edge.node.frontmatter;
                  return (
                    <li className="list-item" key={path}>
                      <article>
                        <div className="meta">
                          <span>
                            <span className="screen-reader">Quote by </span>
                            <Link to={`${repo}/authors/${author}`}>{author}</Link>
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
                          </span>
                        </div>
                        <header className="list-item-header">
                          <h3 className="list-item-title">
                            <Link to={`${repo}/quote/${path}`}>{title}</Link>
                          </h3>
                        </header>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
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
            unverified
          }
        }
      }
    }
  }
`;

export default Blog;
