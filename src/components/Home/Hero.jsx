import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import SocialLink from './SocialLinks'

export default function Hero() {
  return (
    <Box px='1rem' pt='3rem'>
      <Heading as='h1' fontSize='3rem' fontWeight='400' lineHeight='1.3'>
        Hello World
      </Heading>
      <Text
        mt='1rem'
        mb='1.5rem'
        fontSize='1.5rem'
        fontWeight='400'
        lineHeight='1.3'
      >
        Eleventy Duo is a minimal and beautiful Eleventy theme for personal
        blogs. Checkout the project's github repo for more info.
      </Text>
      <SocialLink />
    </Box>
  )
}
