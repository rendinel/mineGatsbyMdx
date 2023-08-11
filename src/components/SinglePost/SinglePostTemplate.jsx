import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Box, Heading, Text } from '@chakra-ui/react'
import { components } from './shortcodes'
import Category from '../Home/Category'

export default function SinglePostTemplate({ post }) {
  const { author, category, preview, date, title } = post.frontmatter
  return (
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
        my='3rem'
        as='p'
      >
        {preview}
      </Text>
      <MDXProvider components={components} />
      <Category category={category} />
    </Box>
  )
}
