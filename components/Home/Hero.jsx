import React from 'react'
import {
  Heading,
  Box,
  HStack,
  Button,
  IconButton,
  useMediaQuery,
} from '@chakra-ui/react'
import { FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Hero({ isHome }) {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const lgContainer = isHome ? '566px' : '395px'
  const mdContainer = isHome ? '418px' : '395px'
  const baseContainer = isHome ? '337px' : '395px'
  return (
    <Box
      minHeight={{
        base: `${baseContainer}`,
        md: `${mdContainer}`,
        lg: `${lgContainer}`,
      }}
      paddingTop={{ base: '50px', md: '50px', lg: '100px' }}
    >
      <Heading
        fontSize={{ base: '24px', md: '46px ', lg: '76px' }}
        fontWeight='700'
        textAlign='center'
        as='h1'
      >
        Minimal blog template for <br /> creative expressions
      </Heading>
      {isHome && (
        <>
          <Heading
            color='gray.600'
            fontSize={{ base: '16px', md: '24px ', lg: '28px' }}
            fontWeight='400'
            as='h2'
            textAlign='center'
            marginY='25px'
          >
            100% customisable and SEO-friendly blog template <br />
            for personal and commercial purposes.
          </Heading>
        </>
      )}
      {isHome && (
        <>
          {' '}
          <HStack justifyContent='center'>
            {isLargerThan768 ? (
              <>
                <Button
                  bg='red'
                  textColor='white'
                  _hover={{}}
                  leftIcon={<FaYoutube color='white' />}
                  _active={{}}
                >
                  Youtube
                </Button>
                <Button
                  _hover={{}}
                  colorScheme='twitter'
                  leftIcon={<FaTwitter />}
                  _active={{}}
                >
                  Twitter
                </Button>
                <Button
                  _hover={{}}
                  colorScheme='linkedin'
                  leftIcon={<FaLinkedin />}
                  _active={{}}
                >
                  Linkedin
                </Button>
                <Button
                  bg='#c13584'
                  textColor='white'
                  _hover={{}}
                  _active={{}}
                  leftIcon={<FaInstagram color='white' />}
                >
                  Instagram
                </Button>
              </>
            ) : (
              <>
                <IconButton
                  _hover={{}}
                  _active={{}}
                  icon={<FaYoutube />}
                  bg='red'
                  color='white'
                />
                <IconButton
                  _hover={{}}
                  _active={{}}
                  icon={<FaTwitter />}
                  colorScheme='twitter'
                />
                <IconButton
                  _hover={{}}
                  _active={{}}
                  icon={<FaLinkedin />}
                  colorScheme='linkedin'
                />
                <IconButton
                  _hover={{}}
                  _active={{}}
                  icon={<FaInstagram />}
                  bg='#c13584'
                  color='white'
                />
              </>
            )}
          </HStack>
        </>
      )}
    </Box>
  )
}
