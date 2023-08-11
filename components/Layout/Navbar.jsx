import React from 'react'
import { Flex, IconButton, Text, Box } from '@chakra-ui/react'
import { HiSearch } from 'react-icons/hi'

export default function Navbar() {
  return (
    <Flex
      minW='100%'
      justifyContent='space-between'
      boxShadow='md'
      height='84px'
      paddingX='5%'
      paddingY='20px'
      as='nav'
    >
      <Box>
        <Text fontSize='28px' fontWeight='800'>
          Rendinel.dev
        </Text>
      </Box>
      <IconButton icon={<HiSearch />} />
    </Flex>
  )
}
