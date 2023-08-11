import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Card({ post }) {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const { date, title, preview, slug } = post.frontmatter
  const img = getImage(post.frontmatter.image.childImageSharp.gatsbyImageData)
  return (
    <Flex
      bg='white'
      borderRadius='20px'
      m='0 auto 100px auto'
      w={{ base: '343px', md: '670px', lg: '980px' }}
      minH={{ base: '300px', md: '202px', lg: '260px' }}
      justifyContent='space-around'
      alignItems='center'
      flexDirection={isLargerThan768 ? 'row' : 'column'}
    >
      <Box
        w={{ base: '311px', md: '390px', lg: '610px' }}
        minHeight={{ base: '84px', md: '152px', lg: '178px' }}
      >
        <Text
          color='gray.500'
          fontWeight='400'
          fontSize={{ base: '12px', md: '13px', lg: '13px' }}
        >
          {date}
        </Text>
        <Link to={`/blog/${slug}`}>
          <Text
            mt='10px'
            mb='10px'
            color='gray.800'
            fontWeight='600'
            fontSize={{ base: '18px', md: '22px', lg: '26px' }}
          >
            {title}
          </Text>
        </Link>
        {isLargerThan768 ? (
          <>
            <Text
              color='gray.600'
              fontWeight='400'
              fontSize={{ md: '16px', lg: '18px' }}
            >
              {preview}
            </Text>
          </>
        ) : null}
      </Box>
      <Box
        borderRadius={'25px'}
        w={{ base: '343px', md: '210px', lg: '300px' }}
        h={{ base: '180px', md: '170px', lg: '212px' }}
      >
        <GatsbyImage
          image={img}
          alt='A kitten'
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </Box>
    </Flex>
  )
}
