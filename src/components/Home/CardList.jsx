import React from 'react'
import Card from './Card'
import Pagination from './Pagination'
import Category from './Category'
import { Box, Flex, Heading } from '@chakra-ui/react'

export default function CardList({
  posts,
  cats,
  title,
  currentPage,
  numberOfPages,
  isHome,
}) {
  return (
    <Box pt='3rem' px='1rem'>
      <Heading
        mb='1rem'
        fontWeight='400'
        lineHeight='1.3'
        as='h2'
        fontSize='1.875rem'
      >
        {title}
      </Heading>
      {cats && (
        <Flex mt='0.5rem' mb='1rem'>
          {cats.map((cat) => {
            return <Category key={cat} category={cat} />
          })}
        </Flex>
      )}
      <Box h='1px' bg='#e6e6e6' mb='3rem' />
      {posts.map((post) => {
        return <Card post={post} key={post.frontmatter.slug} />
      })}
      {isHome && (
        <Pagination currentPage={currentPage} numberOfPages={numberOfPages} />
      )}
    </Box>
  )
}
