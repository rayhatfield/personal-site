/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'ray hatfield',
    description: 'ray hatfield: mild persistent panic',
    author: 'ray hatfield',
    social: {
      twitter: '@rayhatfield'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ray hatfield: information of questionable value',
        short_name: 'ray.wtf',
        start_url: '/',
        icon: 'src/images/helmet.jpg'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
            }
          }
        ]
      }
    },
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           maxWidth: 800,
    //         }
    //       },
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //         options: {
    //         }
    //       }
    //     ]
    //   }
    // }
  ]
}
