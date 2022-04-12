/* eslint-disable prefer-regex-literals */
const fs = require('fs');

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'src/content';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath, { recursive: true });
  }
};

exports.createPages = async ({ graphql, actions, reporter }, options) => {
  const basePath = options.basePath || '/';

  // Home Page
  // actions.createPage({
  //   path: basePath,
  //   component: require.resolve('./pages/index.js'),
  // });

  // Adventures Listing Page
  // actions.createPage({
  //   path: `${basePath}adventures`,
  //   component: require.resolve('./pages/adventures.js'),
  // });

  // Search Page
  // actions.createPage({
  //   path: `${basePath}search`,
  //   component: require.resolve('./pages/search.js'),
  // });

  // Reference Page
  // actions.createPage({
  //   path: `${basePath}reference`,
  //   component: require.resolve('./src/pages/reference.js'),
  // });

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('🚨  ERROR: Loading "createPages" query', reporter.errors);
    return;
  }

  // Adventure Landing Pages & Location Pages
  const posts = result.data.allMdx.edges;
  // eslint-disable-next-line no-unused-vars
  posts.forEach(({ node }, index) => {
    const adventureRegex = new RegExp('adventures/\\w+/$');
    const locationRegex = new RegExp('adventures/\\w+/locations/');
    let template = 'foo';
    if (adventureRegex.test(node.slug)) {
      template = 'adventure';
    }
    if (locationRegex.test(node.slug)) {
      template = 'location';
    }
    if (locationRegex.test(node.slug) || adventureRegex.test(node.slug)) {
      actions.createPage({
        path: `${basePath}${node.slug}`,
        component: require.resolve(`./src/components/${template}-page-layout.js`),
        context: {
          id: node.id,
          locations: template === 'adventure' && `${node.slug}locations/`,
          npcs: template === 'adventure' && `${node.slug}npcs/`,
        },
      });
    }
  });
};
