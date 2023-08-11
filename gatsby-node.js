const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const blogHomeTemplate = require.resolve('./src/templates/BlogHome.jsx')
  const blogCategoryTemplate = require.resolve(
    './src/templates/BlogCategory.jsx'
  )
  const singleBlogTemplate = require.resolve('./src/templates/SinglePost.jsx')

  const postsPerPage = 4

  const result = await graphql(`
    {
      allMdx {
        distinct(field: { frontmatter: { category: SELECT } })
        nodes {
          frontmatter {
            slug
          }
          id
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  const posts = result.data.allMdx.nodes
  const categories = result.data.allMdx.distinct

  if (result.errors) throw result.errors

  const { createPage } = actions

  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: `${path.resolve(
        `./src/templates/SinglePost.jsx`
      )}?__contentFilePath=${post.internal.contentFilePath}`,
      context: { id: post.id },
    })
  })

  categories.forEach((cat) => {
    createPage({
      path: `/blog/${cat}`,
      component: blogCategoryTemplate,
      context: { id: cat, cat: cat },
    })
  })

  const totalPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: totalPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? '/blog' : `/blog/${index + 1}`,
      component: blogHomeTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalPages,
        currentPage: index + 1,
      },
    })
  })
}
