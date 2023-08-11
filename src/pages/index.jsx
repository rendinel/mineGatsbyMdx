import React from 'react'
import Hero from '../components/Home/Hero'
import Seo from '../components/Layout/Seo'
import { Box, Text } from '@chakra-ui/react'
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
    allSitePage {
      nodes {
        path
      }
    }
  }
`

export default function Index({ data }) {
  const posts = data.allMdx.nodes
  const site = data.allSitePage.nodes
  return (
    <>
      <Box>
        {site.map((item, i) => {
          let pages = []
          pages.push({ url: item.path })
          console.log(pages)
          return (
            <>
              <Text key={i}>{item.path}</Text>
            </>
          )
        })}
      </Box>
      <Hero />
      <CardList title='Recent Posts' posts={posts} />
    </>
  )
}

export const Head = () => <Seo />
