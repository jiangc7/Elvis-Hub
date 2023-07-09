import React from 'react'
import logo from '../assets/jcp.webp'
import { Stack, HStack, VStack,Image,Text } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <Text> NavBar</Text>
    </HStack>
  )
}

export default NavBar