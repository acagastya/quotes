import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage({ data }) {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Home" />
      <div className="home-sections-container">
        <div className="home-sections">
          <section id="recent-posts" className="home-section">
            <header>
              <h2 className="home-section-title title">Quotes</h2>
            </header>
            <div className="list-container">
              <ul className="list">
                {edges.map(edge => {
                  const { author, path, title } = edge.node.frontmatter;
                  return (
                    <li className="list-item" key={path}>
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
          </section>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          frontmatter {
            author
            path
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
