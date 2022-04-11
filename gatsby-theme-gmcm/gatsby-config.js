// eslint-disable-next-line no-unused-vars
module.exports = ({ contentPath = 'src/content', basePath = '/' }) => ({
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: contentPath,
      },
    },
  ],
});
