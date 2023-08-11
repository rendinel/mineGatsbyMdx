import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <Flex
      minW='100%'
      justifyContent='space-between'
      px='1rem'
      alignItems='center'
      height='84px'
      as='nav'
      borderBottom='1px'
      borderColor='#e6e6e6'
    >
      <Box>
        <Link to='/'>
          <Text fontWeight='400' lineHeight='1.3' fontSize='1.25rem'>
            Rendinel.dev
          </Text>
        </Link>
      </Box>
      <Box>
        <Link to='/blog'>
          <Text color='#757575' fontSize='1rem'>
            BLOG
          </Text>
        </Link>
      </Box>
    </Flex>
  )
}
