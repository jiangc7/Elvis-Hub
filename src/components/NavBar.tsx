import React from 'react'
import logo from '../assets/jcpweb.jpg'
import { Stack, HStack, VStack,Image, Text, Heading} from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px' >
        <Image  borderRadius={10} overflow='hidden' src={logo} boxSize='60px'/>
        <Heading bgPosition={screenLeft}>Elvis Jiang Personal Works</Heading>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar