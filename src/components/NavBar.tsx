import React from 'react'
import logo from '../assets/jcp.webp'
import { Stack, HStack, VStack,Image} from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px' >
        <Image  borderRadius={10} overflow='hidden' src={logo} boxSize='60px'/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar