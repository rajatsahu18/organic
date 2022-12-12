import React from 'react'
import { Box, Flex, Text, Image, Spacer, useDisclosure, Heading, Button } from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import { Texts } from '../../../Common/constants';
import { Link } from 'react-router-dom';

const NavbarRoutes = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Box bg='#fff' display='flex' p='0.5rem' boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'>
        <Link to='/'>
              <Text m='0 1rem 0 20rem' color='#765F5C'>{Texts.HOME}</Text>
            </Link>
            <Menu isOpen={isOpen}>
              <MenuButton
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                <Text color='#765F5C'>{Texts.SHOP}</Text>
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}
                width="70rem"
                marginTop="1rem" 
                fontSize= "1rem"
                padding= "1rem 1rem "
                >
                <Box>
                  <Flex justifyContent='space-between' alignItems='center'>
                    <Box mx='5' p='10' width="100%" lineHeight="18px">
                      <Flex justifyContent={'space-between'}>
                        <Box>
                          <Heading size='md'>{Texts.HERBAL_SUPPLEMENTS}</Heading><br />
                          <MenuItem><Link to='/himalaya'>{Texts.SINGLE_HERBS}</Link></MenuItem>
                          <MenuItem><Link to='/himalaya'>{Texts.MULTI_SUPPLEMENTS}</Link></MenuItem>
                        </Box>
                        <Box>
                          <Heading size='md'>{Texts.ORAL_CARE}</Heading><br />
                          <MenuItem><Link to='/himalaya'>{Texts.ADULT_TOOTHPASTE}</Link></MenuItem>
                          <MenuItem><Link to='/himalaya'>{Texts.KIDS_TOOTHPASTE}</Link></MenuItem>
                        </Box>
                        <Box>
                          <Heading size='md'>{Texts.PERSONAL_CARE}</Heading><br />
                          <MenuItem><Link to='/himalaya'>{Texts.FACE_CARE}</Link></MenuItem>
                          <MenuItem><Link to='/himalaya'>{Texts.CLEASING_CARE}</Link></MenuItem>
                        </Box>
                      </Flex>
                      
                      <Flex justifyContent='space-between' mt='4rem'>
                        <Box>
                          <Heading size='md'>{Texts.BODY}</Heading><br />
                          <MenuItem><Link to='/mamaearth'>{Texts.HALDI_UPTAN}</Link></MenuItem>
                          <MenuItem><Link to='/mamaearth'>{Texts.BODY_WASH}</Link></MenuItem>
                        </Box>
                        <Box>
                          <Heading size='md'>{Texts.BABY}</Heading><br />
                          <MenuItem><Link to='/mamaearth'>{Texts.HAIR_OIL}</Link></MenuItem>
                          <MenuItem><Link to='/mamaearth'>{Texts.FACE_CREAM}</Link></MenuItem>
                        </Box>
                        <Box>
                          <Heading size='md'>{Texts.MAKEUP}</Heading><br />
                          <MenuItem><Link to='/mamaearth'>{Texts.LIPSTICK}</Link></MenuItem>
                          <MenuItem><Link to='/mamaearth'>{Texts.PERFUME}</Link></MenuItem>
                        </Box>
                      </Flex>
                    </Box>
                    <Box p={5} style={{ width: "20%", textAlign: "center" }}>
                      <Image
                        src='https://honasa-mamaearth-production.imgix.net/d/u/dusting-powder_300g_with-props_1200x1200__nbm9n3snr7a8y8tw.jpg?auto=compress&fit=scale&w=400&h=400'
                        alt="menu_image"
                      />
                      <Button colorScheme='red'>{Texts.FEATURED_PRODUCTS}</Button>
                      <Text> {Texts.FIND_OUT_WHY}</Text>
                    </Box>
                  </Flex>
                </Box>
              </MenuList>
            </Menu>
            <Link to='/himalaya'>
              <Text m='0 1rem 0 1rem' color='#765F5C'>{Texts.HIMALAYA}</Text>
            </Link>
            <Link to='/mamaearth'>
              <Text color='#765F5C'>{Texts.MAMAEARTH}</Text>
            </Link>
            <Link to='/about'>
              <Text ml='1rem' color='#765F5C'>{Texts.ABOUT}</Text>
            </Link>
    </Box>
  )
}

export default NavbarRoutes