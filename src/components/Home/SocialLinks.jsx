import React from 'react'
import { Box, Text, Flex, useMediaQuery, Link } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'

export default function SocialLink() {
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
  return (
    <>
      <Flex w='100%' justifyContent='space-between' alignItems='center'>
        <Box>
          <Link as={GatsbyLink} to='/'>
            <Text
              textDecoration='underline'
              _hover={{ color: '#0074d9' }}
              fontSize='1rem'
            >
              INSTAGRAM
            </Text>
          </Link>
        </Box>
        <Box>
          <Link as={GatsbyLink} to='/'>
            <Text
              textDecoration='underline'
              _hover={{ color: '#0074d9' }}
              fontSize='1rem'
            >
              TWITTER
            </Text>
          </Link>
        </Box>
        <Box>
          <Link as={GatsbyLink} to='/'>
            <Text
              textDecoration='underline'
              _hover={{ color: '#0074d9' }}
              fontSize='1rem'
            >
              YOUTUBE
            </Text>
          </Link>
        </Box>
        <Box>
          <Link as={GatsbyLink} to='/'>
            <Text
              textDecoration='underline'
              _hover={{ color: '#0074d9' }}
              fontSize='1rem'
            >
              MEDIUM
            </Text>
          </Link>
        </Box>
        {isLargerThan500 && (
          <>
            <Box>
              <Link as={GatsbyLink} to='/'>
                <Text
                  textDecoration='underline'
                  _hover={{ color: '#0074d9' }}
                  fontSize='1rem'
                >
                  LINKEDIN
                </Text>
              </Link>
            </Box>
            <Box>
              <Link as={GatsbyLink} to='/'>
                <Text
                  textDecoration='underline'
                  _hover={{ color: '#0074d9' }}
                  fontSize='1rem'
                >
                  GITHUB
                </Text>
              </Link>
            </Box>
          </>
        )}
      </Flex>
      {!isLargerThan500 && (
        <>
          <Flex w='100%' justifyContent='flex-start' alignItems='center'>
            <Box>
              <Link as={GatsbyLink} to='/'>
                <Text
                  textDecoration='underline'
                  _hover={{ color: '#0074d9' }}
                  fontSize='1rem'
                >
                  LINKEDIN
                </Text>
              </Link>
            </Box>
            <Box>
              <Link as={GatsbyLink} to='/'>
                <Text
                  textDecoration='underline'
                  _hover={{ color: '#0074d9' }}
                  fontSize='1rem'
                  ml='4.7rem'
                >
                  GITHUB
                </Text>
              </Link>
            </Box>
          </Flex>
        </>
      )}
    </>
  )
}
