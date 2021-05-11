/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Verikoe-info`,
    siteUrl: `https://www.veriarvot.info`,
    description: `Kaikkien verikokeiden tiedot helposti ja nopeasti`,
  },
  plugins:
    ["gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/typography`,
      },
    },
    `gatsby-plugin-postcss`,
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: "G-C9XRNM6GQY",
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: true,
        },
      },
  ],
}
