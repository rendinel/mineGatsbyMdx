import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Layout/Seo'
import { MDXProvider } from '@mdx-js/react'
import { Box, Heading, Text } from '@chakra-ui/react'
import { components } from '../components/SinglePost/shortcodes'
import Category from '../components/Home/Category'

export const SinglePostQuery = graphql`
  query singlePostQueryQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        author
        category
        date(formatString: "MMMM Do, YYYY")
        title
        slug
        preview
      }
    }
  }
`

export default function SinglePost({ data, children }) {
  const post = data.mdx
  const { author, category, preview, date, title } = post.frontmatter
  return (
    <>
      <Box px='1rem' pt='3rem'>
        <Heading
          fontSize='2.25rem'
          fontWeight='400'
          color='#292929'
          lineHeight='1.3'
          as='h1'
        >
          {title}
        </Heading>
        <Text fontSize='0.9rem' lineHeight='1.54rem' color='#757575'>
          {date} | {author}
        </Text>
        <Text
          fontSize='1.125rem'
          lineHeight='1.54rem'
          color='#292929'
          marginTop='3rem'
          as='p'
        >
          {preview}
        </Text>
        <MDXProvider components={components}>{children}</MDXProvider>
        <Category category={category} />
      </Box>
    </>
  )
}

export const Head = ({ data }) => {
  const seotag = data.mdx
  return (
    <Seo
      pathname={seotag.frontmatter.slug}
      description={seotag.frontmatter.preview}
      title={seotag.frontmatter.title}
      published={seotag.frontmatter.date}
    />
  )
}
