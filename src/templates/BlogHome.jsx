import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Layout/Seo'
import CardList from '../components/Home/CardList'

export const BlogHomeQuery = graphql`
  query blogHomePageQuery($limit: Int!, $offset: Int!) {
    allMdx(sort: { frontmatter: { date: ASC } }, limit: $limit, skip: $offset) {
      distinct(field: { frontmatter: { category: SELECT } })
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

export default function BlogHome({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext
  const posts = data.allMdx.nodes
  const cats = data.allMdx.distinct
  return (
    <>
      <CardList
        isSearch
        isHome
        title='All Posts'
        posts={posts}
        cats={cats}
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    </>
  )
}

export const Head = () => <Seo />
