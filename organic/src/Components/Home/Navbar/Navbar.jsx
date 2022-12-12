import React, { useCallback, useEffect, useState } from 'react'
import { Box, Flex, Text, Image, Spacer, useDisclosure, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from '../../../image/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logoutInit } from "../../../Redux/Authreducer/action";
import {
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react'
import { BsPersonFill } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import axios from 'axios';
import { Texts } from '../../../Common/constants';
import NavbarRoutes from './NavbarRoutes';
import { Search2Icon } from '@chakra-ui/icons';
import { FaStar } from "react-icons/fa";
import {MdVerified} from 'react-icons/md'

const Navbar = () => {
  const [cartData, setCartData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const currentUser = useSelector((store) => store.AuthReducer.currentUser);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getProductData = () => {
    axios.get(`https://json-mock-server-rajatsahu18.vercel.app/organic`)
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log("err", err)
      })
  }

  const handleAuth = () => {
    if (currentUser) {
      dispatch(logoutInit())
    }
  }

  const handleInputTextChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  useEffect(() => {
    if (query === "") {
      setSuggestions([])
    } else {
      let newProductsSuggestions = products.filter(item => {
        return item.name.toLowerCase().indexOf(query) !== -1 ? true : false;
      }).map((item) => {
        return (item)
      });
      setSuggestions(newProductsSuggestions);
      console.log(newProductsSuggestions);
    }
  }, [products, query])
  useEffect(() => {
    getProductData();
  }, [])

  let total_price = 0;
        for( let i = 0; i < cartData.length; i++ ) {
            total_price += (cartData[i].price * cartData[i].count);
        }
  
  const getCartData = () =>{
    axios.get('https://json-mock-server-rajatsahu18.vercel.app/postDataToCart')
    .then((res)=>{
      setCartData(res.data)
    })
    .catch((err)=>{
      console.log("err",err)
    })
  }
  useEffect(()=>{
    getCartData();
  },[cartData.length])
  
  console.log("sugesion", suggestions);
  return (
    <>
      <Box bg='#fff' position='fixed' w='100%' top='0' zIndex='10000' >
        <Box display='flex' bg='#A6CE3A' h='4rem' color='#fff' pt='1rem'>
            <marquee>
              <Text textAlign='center'>{Texts.USE_CODE_HIMALAYA}</Text>
            </marquee>
            <marquee>
              <Text textAlign='center'>{Texts.USE_CODE_BODY}</Text>
            </marquee>
        </Box>
        <Box p='0.7rem' display='flex' gap={6} alignItems='center' justifyContent='center'>
          <Box width='8rem' m='0 3rem 0 7rem' >
              <Link to="/">
                  <Image
                    src={logo}
                    alt='logo'
                    height={'5rem'}
                    width={'100%'}
                  />
              </Link>
          </Box>
          {/* <Box>
            <Input
            placeholder='Search'
            onChange={handleInputTextChange}
            w='30rem'
            />
            <Box position='relative' zIndex='999'>
              {suggestions ?
                <Box >{
                      suggestions?.map((product) => (
                          <Box >
                            <Text >{product.name}</Text>
                          </Box>
                      ))}
                  </Box>
                  :""
              }
              </Box>
          </Box> */}
          <Spacer/>

            <Box justifyContent='left'>
              <Text color='#00AFEF'>{currentUser ? `${currentUser.displayName}` : '' }</Text>
            </Box>
              
            {/* <Menu >
              <MenuButton>Search</MenuButton>
              <MenuList border='1px solid black' w='104rem' mt='4.5rem'>
                <Box>
                  <Input
                  placeholder='Search'
                  onChange={handleInputTextChange}
                  w='30rem'
                  />
                  <Box>
                    {suggestions ?
                      <Box overflowY='scroll'>{
                            suggestions?.map((product) => (
                                <Box >
                                  <Image h='2rem' src={product.img} />
                                  <Text >{product.name}</Text>
                                </Box>
                            ))}
                        </Box>
                        :""
                    }
                    </Box>
                </Box>
              </MenuList>
            </Menu>    */}


            <Menu>
              <MenuButton title='search' color='#00AFEF' >
                <Search2Icon />
              </MenuButton>

              <MenuList border='1px solid #C1C1C1' h='6rem' w='78rem' fontSize="1rem">
                <Box px={'100px'} py={'4px'} width={'100%'}>
                  <Box py={2}>
              
                    <Flex>
                      <Input
                        placeholder='Search'
                        p='1.5rem'
                        onChange={handleInputTextChange}
                      />
                    </Flex>
                  </Box>
                </Box>
                {
                  suggestions ?
                  <Box border='1px solid #C1C1C1' borderTop='none' h='40rem' backgroundColor='#fff' overflowY={'scroll'}>
                    <Flex justifyContent={'space-around'} flexWrap={'wrap'}>
                      {
                        suggestions?.map((product) => (
                            <Box boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px' borderRadius='0.5rem' p='1rem' w='15rem' m='2rem' px={3} >
                              <Image h='10rem' width='100%' src={product.img} alt='product' />
                              <Text fontSize='0.8rem' textAlign='center'>{product.name}</Text>
                              <Box display='flex' justifyContent='center' gap='0.2rem'>
                <Text mt='0.1rem' ><FaStar size='0.8rem' color="#A6CE3A" /></Text>
                <Text textAlign='center' fontSize='0.9rem' mr='1rem'>{product.rating}</Text>
                <Text  mt='0.1rem' ><MdVerified size='0.8rem' color="#00AFEF"/></Text>
                <Text textAlign='center' fontSize='0.9rem'>{product.reviews} Reviews</Text>
              </Box>
              <Text fontSize='1.3rem' color='#000' textAlign='center' fontWeight='700' >₹ {product?.price}</Text>

                            </Box>
                        ))
                      }
                    </Flex>
                    </Box>
                    :
                    ""
                }
              </MenuList>
            </Menu>








            <Menu>
              <MenuButton title='My Account' color='#00AFEF' >
                <BsPersonFill size='1.5rem'/>
              </MenuButton>
              <MenuList mt={5} fontSize="16px" bg='#fff'>
                <Box justifyContent='center' px={8} py={5} >
                  <Link to='/login'><button onClick={handleAuth}><Text color='#00AFEF' fontWeight='800'>{currentUser ? "Logout" : "Sign In"}</Text></button></Link>
                  <Link to='/registration'><Text color='#00AFEF' fontWeight='800'>{currentUser ? "" : "Register"}</Text ></Link>
                  <Link to='/checkout'><Text color='#00AFEF' fontWeight='800'>{Texts.CHECKOUT}</Text> </Link>
                </Box>
              </MenuList>
            </Menu>

            <Box color='#00AFEF'>
              <Link to='/cartPage'>
                <FiShoppingCart size='1.5rem'/>
              </Link>
            </Box>
            <Box border='1px solid #00AFEF' bg='#00AFEF' w='1.1rem' h='1.2rem' borderRadius='50%' m='0 5rem 1rem -1.8rem'>
              <Text fontSize='0.69rem' color='#fff' fontWeight='600' textAlign='center'>{cartData.length}</Text>
            </Box>
          </Box>
          <NavbarRoutes/>
      </Box>
    </>
  )
}

export default Navbar