import React from 'react'
import { Box, Text, Flex, useMediaQuery } from '@chakra-ui/react'
import { Link } from 'gatsby'

export default function SocialLink() {
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
  return (
    <>
      <Flex w='100%' justifyContent='space-between' alignItems='center'>
        <Box>
          <Link to='/'>
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
          <Link to='/'>
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
          <Link to='/'>
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
          <Link to='/'>
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
              <Link to='/'>
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
              <Link to='/'>
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
          <Flex w='100%' justifyContent='space-evenly' alignItems='center'>
            <Box>
              <Link to='/'>
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
              <Link to='/'>
                <Text
                  textDecoration='underline'
                  _hover={{ color: '#0074d9' }}
                  fontSize='1rem'
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
