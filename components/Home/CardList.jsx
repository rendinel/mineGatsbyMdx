import { Box, Flex, Text, Button } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

export default function CardList({ posts }) {
  return (
    <Box paddingY={{ base: '40px ', md: '60px', lg: '80px' }} bg='gray.100'>
      <Flex
        m='0 auto 50px auto'
        w={{ base: '343px', md: '670px', lg: '980px' }}
        justifyContent='space-between'
        alignItems='center'
      >
        <Box>
          <Text
            fontSize={{ base: '16px', md: '22px', lg: '26px' }}
            fontWeight='700'
          >
            Latest
          </Text>
        </Box>
        <Button
          w='77px'
          h='36px'
          borderRadius='8px'
          border='1px'
          borderColor='gray.200'
          background='white'
          _hover={{}}
          _active={{}}
        >
          View all
        </Button>
      </Flex>
      {posts.map((post) => {
        return <Card post={post} key={post.frontmatter.slug} />
      })}
    </Box>
  )
}
