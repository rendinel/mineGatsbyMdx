import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <Box paddingY='40px' boxShadow='inner' height='100px'>
      <Text fontSize='12px' fontWeight='400' textAlign='center'>
        &copy;{new Date().getFullYear()} - Lucio Rendine{' '}
      </Text>
    </Box>
  )
}
