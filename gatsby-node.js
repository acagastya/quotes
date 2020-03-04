const path = require('path');

const createTagPages = function(createPage, posts) {
  const allTagsTemplate = path.resolve(
    'src',
    'templates',
    'allTagsTemplate.js'
  );
  const singleTagTemplate = path.resolve(
    'src',
    'templates',
    'singleTagTemplate.js'
  );
  const postsByTag = {};
  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) postsByTag[tag] = [];
        postsByTag[tag].push(node);
      });
    }
  });
  const tags = Object.keys(postsByTag);

  createPage({
    path: '/tags',
    component: allTagsTemplate,
    context: { tags, postsByTag },
  });

  tags.forEach(tag => {
    const posts = postsByTag[tag];
    createPage({
      path: `/tags/${tag}`,
      component: singleTagTemplate,
      context: {
        posts,
        tag,
      },
    });
  });
};

const createAuthorPages = function(createPage, posts) {
  const allAuthorsTemplate = path.resolve(
    'src',
    'templates',
    'allAuthorsTemplate.js'
  );
  const singleAuthorTemplate = path.resolve(
    'src',
    'templates',
    'singleAuthorTemplate.js'
  );
  const postsByAuthor = {};
  posts.forEach(({ node }) => {
    if (node.frontmatter.author) {
      const author = node.frontmatter.author;
      if (!postsByAuthor[author]) postsByAuthor[author] = [];
      postsByAuthor[author].push(node);
    }
  });
  const authors = Object.keys(postsByAuthor);

  createPage({
    path: '/authors',
    component: allAuthorsTemplate,
    context: { authors, postsByAuthor },
  });

  authors.forEach(author => {
    const posts = postsByAuthor[author];
    createPage({
      path: `/authors/${author}`,
      component: singleAuthorTemplate,
      context: {
        author,
        posts,
      },
    });
  });
};

exports.createPages = function({ graphql, actions }) {
  const { createPage } = actions;

  return new Promise(function(resolve, reject) {
    const blogPostTemplate = path.resolve('src', 'templates', 'blogPost.js');
    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              filter: { frontmatter: { draft: { ne: true } } }
            ) {
              edges {
                node {
                  frontmatter {
                    author
                    path
                    tags
                    title
                  }
                }
              }
            }
          }
        `
      ).then(function(result) {
        const posts = result.data.allMarkdownRemark.edges;
        createTagPages(createPage, posts);
        createAuthorPages(createPage, posts);
        posts.forEach(function({ node }, index) {
          createPage({
            path: 'post' + node.frontmatter.path,
            component: blogPostTemplate,
            context: {
              pathSlug: node.frontmatter.path,
              next: index == posts.length - 1 ? null : posts[index + 1].node,
              prev: index == 0 ? null : posts[index - 1].node,
            },
          });
          resolve();
        });
      })
    );
  });
};
