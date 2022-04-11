module.exports = ({ contentPath = 'content', basePath = '/' }) => ({
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: contentPath,
      }
    },
  ]
});
