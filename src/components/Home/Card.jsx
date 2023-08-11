import React from 'react'
import { Box, Heading, Text, Link } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import Category from './Category'

export default function Card({ post }) {
  const { date, title, preview, slug, category } = post.frontmatter
  return (
    <Box>
      <Text color='#757575' fontSize='0.875rem'>
        {date}
      </Text>
      <Category category={category} />
      <Heading color='#292929' as='h3' fontWeight='400' fontSize='1.5rem'>
        {title}
      </Heading>
      <Text
        lineHeight='1.54'
        my='1rem'
        fontSize='1.125rem'
        as='p'
        color='rgba(0,0,0,.8)'
      >
        {preview}
      </Text>
      <Link as={GatsbyLink} to={`/blog/${slug}`}>
        <Text
          fontSize='1rem'
          textDecoration='underline'
          _hover={{ color: '#0074d9' }}
        >
          Read Article
        </Text>
      </Link>
      <Box h='1px' bg='#e6e6e6' my='3rem' />
    </Box>
  )
}
