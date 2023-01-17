// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsbycontentfulhomepage.gatsbyjs.io/",
    title: "Gatsby Contentful Homepage Starter",
    author: `Gatsby`,
    description: "A Gatsby Starter for building homepages with Contentful",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Contentful Homepage",
        short_name: "Gatsby",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffe491",
        theme_color: "#004ca3",
        icon: "src/favicon.png",
      },
    },
  ],
}
