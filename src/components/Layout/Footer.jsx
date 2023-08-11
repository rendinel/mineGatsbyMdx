import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import SocialLink from '../Home/SocialLinks'

export default function Footer() {
  return (
    <Flex
      px='1rem'
      paddingTop='2rem'
      borderTop='1px'
      borderColor='#e6e6e6'
      direction='column'
      alignItems='center'
      justifyContent='space-around'
      minH='130px'
      as='footer'
    >
      <SocialLink />
      <Box mt='1rem'>
        <Text>&copy;{new Date().getFullYear()} - Lucio Rendine </Text>
      </Box>
    </Flex>
  )
}
