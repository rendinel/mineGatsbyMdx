module.exports = {
  siteMetadata: {
    title: `Lucio Rendine Blog`,
    author: `Lucio Rendine`,
    description: `My blog where i publish coding tutorials.`,
    twitterUsername: `@LucioRendine`,
    image: `/profilepic2.png`,
    icon: `/favicon.ico`,
    siteUrl: `https://mrnutrition.vercel.app`,
  },
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if `false`, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {number} [portalZIndex=40]
         * The z-index to apply to all portal nodes. This is useful
         * if your app uses a lot z-index to position elements.
         */
        portalZIndex: 40,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
              {
                site {
                  siteMetadata {
                    siteUrl
                  }
                }
                allSitePage {
                  edges {
                    node {
                      path
                    }
                  }
                }
                allMdx {
                  edges {
                    node {
                      frontmatter {
                        slug
                      }
                    }
                  }
                }
              }
        `,
        serialize: ({ site, allSitePage, allMdx }) => {
          let pages = []
          allSitePage.edges.map((edge) => {
            pages.push({
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            })
          })
          allMdx.edges.map((edge) => {
            pages.push({
              url: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.slug}`,
              changefreq: `daily`,
              priority: 0.7,
            })
          })

          return pages
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
  ],
}
