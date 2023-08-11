import React from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import { Flex, Text } from '@chakra-ui/react'
import { Link } from 'gatsby'

export default function SearchCard({
  searchQuery,
  blogsIndexStore,
  onClose,
  resetValue,
}) {
  console.log(blogsIndexStore)
  const blogsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store
  )

  if (blogsResult.length === 0)
    return (
      <Text color='#292929' fontWeight='400' fontSize='1.5rem' as='h4' mt={4}>
        No result found
      </Text>
    )
  return (
    <>
      {blogsResult.length > 0 && (
        <>
          {blogsResult.map((result) => {
            return (
              <Flex flexDirection='column' mt={4} key={result.id}>
                <Link
                  onClick={onClose && resetValue}
                  to={`/blog/${result.slug}`}
                >
                  <Text
                    color='#292929'
                    fontWeight='400'
                    fontSize='1.5rem'
                    as='h4'
                  >
                    {result.title}
                  </Text>
                </Link>
              </Flex>
            )
          })}
        </>
      )}
    </>
  )
}
