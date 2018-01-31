module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  pathPrefix: '/mar8388.github.io',
  plugins: [
    `gatsby-plugin-react-helmet`,
    { resolve: `gatsby-plugin-nprogress`,
      options: {
      // Setting a color is optional.
      color: `tomato`,
      // Disable the loading spinner.
      showSpinner: true,
    }
  }
  ]
}
