import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Texts } from './constants'
import logo from '../image/logo.png'

const BreadCumbs = () => {
  return (
    <Box>
        <Link to="/">
              <Image src={logo} alt="logo" h='6rem'
              />
            </Link>

            <Box display='flex' fontSize='0.7rem'gap='1rem' mb='1rem'>
              <Text>Cart</Text>
              <Text>&gt;</Text>
              <Link to="/checkout">{Texts.INFORMATION}</Link>
              <Text>&gt;</Text>
              <Link to="/payment">{Texts.PAYMENT}</Link>
            </Box>
    </Box>
  )
}

export default BreadCumbs