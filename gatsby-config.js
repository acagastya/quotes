const path = require('path');

module.exports = {
  siteMetadata: {
    author: 'Agastya Chandrakant',
    description: 'Some of my favourite quotes',
    email: 'acagastya@outlook.com',
    github: 'acagastya',
    instagram: 'acagastya',
    siteName: 'Quotes',
    siteUrl: 'https://acagastya.github.io/quotes',
    title: 'Quotes',
    twitter: '@acagastya',
    username: 'acagastya',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'quotes',
        path: path.join(__dirname, 'quotes'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-abbr'],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Quotes',
        short_name: `My favourite quotes`,
        start_url: '/',
        background_color: '#324996',
        theme_color: '#298BCC',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
