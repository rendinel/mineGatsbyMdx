module.exports = {
  siteMetadata: {
    title: `Lucio Rendine Blog`,
    author: `Lucio Rendine`,
    description: `My blog where i publish coding tutorials.`,
    twitterUsername: `@LucioRendine`,
    image: `/profilepic2.png`,
    icon: `/favicon.ico`,
    siteUrl: `https://rad-dragon-ac9d8f.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
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
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `blogs`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
              {
                allMdx {
                  nodes {
                    id
                    frontmatter {
                      slug
                      author
                      category
                      date
                      preview
                      title
                    }
                  }
                }
              }
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'slug', 'author', 'category', 'date', 'preview', 'title'],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map((node) => ({
            id: node.id,
            title: node.frontmatter.title,
            category: node.frontmatter.category,
            slug: node.frontmatter.slug,
            author: node.frontmatter.author,
            date: node.frontmatter.date,
            preview: node.frontmatter.preview,
          })),
      },
    },
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
                    nodes {
                      path
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
          allSitePage.nodes.map((node) => {
            pages.push({
              url: site.siteMetadata.siteUrl + node.path,
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
  ],
}
