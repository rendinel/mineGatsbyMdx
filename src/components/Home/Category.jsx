import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Text, Link } from '@chakra-ui/react'

export default function Category({ category }) {
  return (
    <Link as={GatsbyLink} to={`/blog/${category}`}>
      <Text
        _hover={{ color: '#0074d9' }}
        mt='0.5rem'
        mr='0.5rem'
        mb='1rem'
        color='#757575'
        fontSize='0.875rem'
      >
        #{category}
      </Text>
    </Link>
  )
}
