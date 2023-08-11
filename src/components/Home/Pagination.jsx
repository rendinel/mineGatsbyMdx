import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Stack, Link, Text } from '@chakra-ui/react'

export default function Pagination({ currentPage, numberOfPages }) {
  const prevPage =
    currentPage - 1 === 0 || currentPage - 1 === 1
      ? `/blog`
      : `/blog/${currentPage - 1}`

  const nextPage =
    currentPage === numberOfPages ? `/blog` : `/blog/${currentPage + 1}`
  return (
    <Stack mb='1.5rem' direction='row' justify='center'>
      <Stack direction='row'>
        <Link _hover={{ underline: 'none' }} as={GatsbyLink} to={prevPage}>
          <Text fontSize='1.125rem'>&#8592; Prev</Text>
        </Link>

        <Link _hover={{ underline: 'none' }} as={GatsbyLink} to={nextPage}>
          <Text fontSize='1.125rem'> Next &#8594; </Text>
        </Link>
      </Stack>
    </Stack>
  )
}
