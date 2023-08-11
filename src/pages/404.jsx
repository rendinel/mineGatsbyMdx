import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Heading, Text, Link } from '@chakra-ui/react'

export default function ErrorPage() {
  return (
    <Box px='1rem' paddingY='3rem'>
      <Heading as='h1' fontSize='3rem' fontWeight='400' lineHeight='1.3'>
        404 Error
      </Heading>
      <Text
        marginY='1.5rem'
        fontSize='1.5rem'
        fontWeight='400'
        lineHeight='1.3'
      >
        The page you were looking for doesen't exist
      </Text>
      <Link as={GatsbyLink} to={`/`}>
        <Text
          fontSize='1rem'
          textDecoration='underline'
          _hover={{ color: '#0074d9' }}
        >
          Back Home
        </Text>
      </Link>
    </Box>
  )
}
