import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Layout/Seo'
import CardList from '../components/Home/CardList'

export const CategoryQuery = graphql`
  query blogCategoryPageQuery($cat: String!) {
    allMdx(filter: { frontmatter: { category: { eq: $cat } } }) {
      nodes {
        frontmatter {
          author
          category
          preview
          slug
          date(formatString: "MMMM Do, YYYY")
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default function BlogCategory({ pageContext, data }) {
  const { cat } = pageContext
  const posts = data.allMdx.nodes
  const title = cat[0].toUpperCase() + cat.slice(1)
  console.log(cat, posts)
  return (
    <>
      <CardList posts={posts} title={`All ${title} posts`} />
    </>
  )
}

export const Head = () => <Seo />
