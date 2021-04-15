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
  plugins: ["gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/typography`,
      },
    },
  ],
}
