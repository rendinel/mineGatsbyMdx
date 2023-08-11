import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'
import Card from './Card'
import Pagination from './Pagination'

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
            return (
              <Link key={cat} to={`/blog/${cat}`}>
                <Text
                  mr='1rem'
                  _hover={{ color: '#0074d9' }}
                  color='#757575'
                  fontSize='0.875rem'
                >
                  #{cat}
                </Text>
              </Link>
            )
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
