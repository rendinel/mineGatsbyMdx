import * as React from 'react'
import PrismCodeBlock from './PrismCodeBlock'
import { Heading, Text } from '@chakra-ui/react'

const myH2 = ({ props, children }) => {
  return (
    <Heading
      as='h2'
      fontSize='1.875rem'
      color='#292929'
      fontWeight='400'
      lineHeight='1.3'
      mt='5rem'
      mb='0.5rem'
      {...props}
    >
      {children}
    </Heading>
  )
}

const MyParagraph = ({ props, children }) => (
  <Text
    fontSize='1.125rem'
    lineHeight='1.54rem'
    color='#292929'
    mb='1.5rem'
    as='p'
    {...props}
  >
    {children}
  </Text>
)

export const components = {
  h2: myH2,
  p: MyParagraph,
  pre: PrismCodeBlock,
}
