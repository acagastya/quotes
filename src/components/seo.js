/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/* eslint-disable eqeqeq */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ blog = false, cover = 'https://upload.wikimedia.org/wikipedia/commons/6/68/Das_große_Q.jpg', description, lang, path, tags, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            siteName
            siteUrl
            title
            username
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const type = blog ? 'article' : 'website';
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s • ${site.siteMetadata.title}`}
    >
      <meta name="description" content={metaDescription} />
      <meta property="og:site_name" content={site.siteMetadata.siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={cover} />
      {blog && path ? (
        <meta
          property="og:url"
          content={`${site.siteMetadata.siteUrl}/quote${path}`}
        />
      ) : (
          <meta property="og:url" content={`${site.siteMetadata.siteUrl}`} />
        )}
      {blog &&
        tags.length &&
        tags.map(tag => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {path ? (
        <meta
          name="twitter:url"
          content={`${site.siteMetadata.siteUrl}/quote${path}`}
        />
      ) : (
          <meta name="twitter:url" content={`${site.siteMetadata.siteUrl}`} />
        )}
      {blog && <meta name="twitter:label1" content="Written by" />}
      {blog && <meta name="twitter:data1" content={site.siteMetadata.author} />}
      {blog && tags.length && (
        <meta name="twitter:label2" content="Filed under" />
      )}
      {blog && tags.length && (
        <meta name="twitter:data2" content={tags.join(', ')} />
      )}
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
