import React, { useState, useRef } from 'react'
import {
  Flex,
  Link,
  useDisclosure,
  Text,
  Box,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
} from '@chakra-ui/react'
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'
import axios from 'axios'
import SearchCard from './SearchCard'

const query = graphql`
  {
    localSearchBlogs {
      publicIndexURL
      publicStoreURL
    }
  }
`

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchQuery, setSearchQuery] = useState('')
  const [blogsIndexStore, setBlogsIndexStore] = useState(null)
  const btnRef = useRef()
  const data = useStaticQuery(query)
  const {
    publicStoreURL: blogsPublicStoreURL,
    publicIndexURL: blogsPublicIndexURL,
  } = data.localSearchBlogs
  const handleOnFocus = async () => {
    if (blogsIndexStore) return
    const [{ data: blogsIndex }, { data: blogsStore }] = await Promise.all([
      axios.get(blogsPublicIndexURL),
      axios.get(blogsPublicStoreURL),
    ])
    setBlogsIndexStore({
      index: blogsIndex,
      store: blogsStore,
    })
  }

  const setSearchValue = (e) => {
    e.preventDefault()
    setSearchQuery(e.target.value)
  }

  const resetValue = () => {
    setSearchQuery('')
    onClose()
  }
  return (
    <Flex
      minW='100%'
      justifyContent='space-between'
      px='1rem'
      alignItems='center'
      height='84px'
      as='nav'
      borderBottom='1px'
      borderColor='#e6e6e6'
    >
      <Box>
        <Link as={GatsbyLink} to='/'>
          <Text fontWeight='400' lineHeight='1.3' fontSize='1.25rem'>
            Rendinel.dev
          </Text>
        </Link>
      </Box>
      <Flex>
        <Box mr='1rem'>
          <Link as={GatsbyLink} to='/blog'>
            <Text color='#757575' fontSize='1rem'>
              BLOG
            </Text>
          </Link>
        </Box>
        <Box
          as='button'
          ref={btnRef}
          onClick={onOpen}
          color='#757575'
          fontSize='1rem'
        >
          SEARCH
        </Box>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader color='#292929' fontWeight='400' fontSize='1.5rem'>
            Search
          </DrawerHeader>

          <DrawerBody>
            <Input
              value={searchQuery}
              onFocus={handleOnFocus}
              onChange={(e) => setSearchValue(e)}
              placeholder='Type here...'
              focusBorderColor='#292929'
              borderRadius='0'
              pr='4.5rem'
              border='1px solid'
              borderColor='#292929'
              _placeholder={{ color: '#292929' }}
            />
            {searchQuery && blogsIndexStore && (
              <SearchCard
                blogsIndexStore={blogsIndexStore}
                searchQuery={searchQuery}
                onClose={onClose}
                resetValue={resetValue}
              />
            )}
          </DrawerBody>

          <DrawerFooter>
            <Box
              as='button'
              fontSize='1.125rem'
              h='45px'
              w='9rem'
              onClick={onClose && resetValue}
            >
              &#10005; Close
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
