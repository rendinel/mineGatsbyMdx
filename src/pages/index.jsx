import React from 'react'
import Hero from '../components/Home/Hero'
import Seo from '../components/Layout/Seo'
import CardList from '../components/Home/CardList'
import { graphql } from 'gatsby'

export const query = graphql`
  {
    allMdx(sort: { frontmatter: { date: ASC } }, limit: 6) {
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

export default function Index({ data }) {
  const posts = data.allMdx.nodes
  return (
    <>
      <Hero />
      <CardList title='Recent Posts' posts={posts} />
    </>
  )
}

export const Head = () => <Seo />
