import React from 'react'
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import Navbar from './Navbar'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/400-italic.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import Footer from './Footer'

const theme = extendTheme({
  fonts: {
    body: `'Montserrat', sans-serif`,
  },
})

export default function Layout({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Box m='0 auto' maxW='780px' overflowX='hidden'>
        <Navbar />
        {children}
        <Footer />
      </Box>
    </ChakraProvider>
  )
}
