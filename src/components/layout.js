import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Header from './header';
import Footer from './footer';

function Layout({
  children,
  heading = undefined,
  link,
  showHeader = true,
  slug = undefined,
}) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          description
          email
          username
          title
        }
      }
    }
  `);
  const {
    author,
    description,
    email,
    title,
    username,
  } = data.site.siteMetadata;

  return (
    <div className="site">
      <a href="#main" className="screen-reader">
        Skip to Content
      </a>
      <Header
        description={description}
        link={link}
        showHeader={showHeader}
        siteTitle={heading || title}
        slug={slug}
      />
      <main className="main" id="main">
        {children}
      </main>
      <Footer author={author} email={email} username={username} />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
