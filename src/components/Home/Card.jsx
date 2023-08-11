import { Box, Heading, Text } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'

export default function Card({ post }) {
  const { date, title, preview, slug, category } = post.frontmatter

  return (
    <Box>
      <Text color='#757575' fontSize='0.875rem'>
        {date}
      </Text>
      <Link to={`/blog/${category}`}>
        <Text
          _hover={{ color: '#0074d9' }}
          mt='0.5rem'
          mb='1rem'
          color='#757575'
          fontSize='0.875rem'
        >
          #{category}
        </Text>
      </Link>
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
      <Link to={`/blog/${slug}`}>
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
