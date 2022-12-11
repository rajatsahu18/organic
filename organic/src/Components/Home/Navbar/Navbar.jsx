import React, { useCallback, useEffect, useState } from 'react'
import { Box, Flex, Text, Image, Spacer, useDisclosure, Heading, Button, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Search2Icon, CloseIcon } from "@chakra-ui/icons";
import logo from '../../../image/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logoutInit } from "../../../Redux/Authreducer/action";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { BsHandbag, BsPersonFill } from 'react-icons/bs'
import axios from 'axios';
import { Texts } from '../../../Common/constants';

const Navbar = () => {
  const [cartData, setCartData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentUser = useSelector((store) => store.AuthReducer.currentUser);
  const dispatch = useDispatch();

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
      <Box position='fixed' w='100%' top='0' zIndex='10000' >
        <Box display='flex' bg='#A6CE3A' h='4rem' color='#fff' pt='1rem'>
            <marquee>
              <Text textAlign='center'>{Texts.USE_CODE_HIMALAYA}</Text>
            </marquee>
            <marquee>
              <Text textAlign='center'>{Texts.USE_CODE_BODY}</Text>
            </marquee>
        </Box>
        <Box bg='#fff' p='1rem'>
          <Flex gap={6} alignItems={'center'} justifyContent={'center'}>
            <Link to="/">
              <Box height='5rem' width='8rem'>
                <Image
                  src={logo}
                  alt='logo'
                  height={'5rem'}
                  width={'100%'}
                />
              </Box>
            </Link>
            <Menu isOpen={isOpen}>
              <MenuButton
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                <Text color='#00AFEF'>{Texts.SHOP}</Text>
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
              <Text color='#00AFEF'>{Texts.HIMALAYA}</Text>
            </Link>
            <Link to='/mamaearth'>
              <Text color='#00AFEF'>{Texts.MAMAEARTH}</Text>
            </Link>
            <Link to='/about'>
              <Text color='#00AFEF'>{Texts.ABOUT}</Text>
            </Link>
            <Spacer />
            <Link to="/"> {currentUser ? 
            <Text color='#00AFEF'>{
              currentUser.displayName
            }
          
            </Text>  
             : ""}</Link>

            <Menu>
              <MenuButton title='search' color='#00AFEF' >
                <Search2Icon />
              </MenuButton>

              <MenuList h='12rem' fontSize="1rem">
                <Box px={'100px'} py={'4px'} width={'100%'}>
                  <Box borderBottom={'1px solid gray'} py={2}>
                    <Flex justifyContent={'space-between'} mb={10} gap={4}>
                      <Text>{Texts.LOOKING_FOR}</Text>
                        <Button onClick={onClose}>
                          <CloseIcon />
                        </Button>
                    </Flex>
                    <Flex justifyContent={'space-between'} gap={4}>
                      <Input
                        placeholder='Search'
                        height={'50px'}
                        variant='unstyled'
                        fontSize={'25px'}
                        onChange={handleInputTextChange}
                      />
                    </Flex>
                  </Box>
                </Box>
                {
                  suggestions ?
                  <Box maxHeight='400px' maxWidth={'100vw'} marginRight={'10px'} backgroundColor={'white'} overflowY={'scroll'}>
                    <Flex justifyContent={'space-around'} flexWrap={'wrap'}>
                      {
                        suggestions?.map((product) => (
                            <Box width={'200px'} px={3} >
                              <Image height={'180px'} width={'150px'} src={product.img} alt='product' />
                              <Text fontSize={'0.9rem'}>{product.name}</Text>
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
                <BsPersonFill/>
              </MenuButton>
              <MenuList mt={5} fontSize="16px" bg='#fff'>
                <Flex flexDirection='column' justifyContent='center' px={8} py={5} >
                  <Link to='/login'><button onClick={handleAuth}><Text color='#00AFEF' fontWeight='800'>{currentUser ? "Logout" : "Sign In"}</Text></button></Link>
                  <Link to='/registration'><Text color='#00AFEF' fontWeight='800'>{currentUser ? "" : "Register"}</Text ></Link>
                  <Link to='/checkout'><Text color='#00AFEF' fontWeight='800'>{Texts.CHECKOUT}</Text> </Link>
                </Flex>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton title='Cart' >
              <Flex fontSize={'20px'}>
                <Box color='#00AFEF'><BsHandbag /></Box>
                <Box height={'20px'} width={'20px'} >
                  <sup 
                  style=
                  {{
                    backgroundColor:'#333333', 
                    color:'white',
                    fontSize: '10px',
                    paddingLeft: '6px',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: '50%',
                    fontWeight: '600',
                  }}
                  >{cartData.length}</sup></Box>
              </Flex>    
              </MenuButton>
              <MenuList>
                <Box
                style=
                {{
                  color: '#333333',
                  fontWeight: '600',
                  marginLeft: '3rem',
                  marginBottom: '1rem'

                }}
                >
                <h2>{Texts.SHOPPING_CART}</h2>
                </Box>
                <Box style={{ width: "400px", maxHeight:"400px", overflow:'scroll', fontSize:'16px' }}>

               {
                 cartData.length > 0 && cartData.map((item)=> (

                  <Flex 
                  style=
                  {{ 
                    justifyContent: 'space-around',
                    borderBottom: '1px solid #ebebeb',
                    width: '80%',
                    marginLeft: '2rem',
                    marginBottom: '1.5rem'
                   }}
                  >
                    <Box 
                    height={'80px'} 
                    width={'80px'}>
                      <Image 
                      src={item.img} 
                      alt='item_img' 
                      height={'100%'} 
                      width={'100%'}
                      />
                      </Box>
                    <Box width={'300px'} ml={'1rem'}>
                      <Flex flexDirection={'column'}>
                        <Box>{item.name}</Box>
                        <Box>{item.count} 
                        <span 
                        style=
                        {{
                          fontSize:'10px',
                          marginLeft: '3px'
                        }}
                        >
                          <CloseIcon/></span>₹ {item.price}</Box>
                      </Flex>
                    </Box>
                  </Flex>
                 ))
               }
              
                  <Box p={5} ml={4}>
                    <Flex>
                      <Box>{Texts.TOTAL}:</Box> 
                      &nbsp;&nbsp;
                      <Box>₹ {total_price.toFixed(2)}
                      </Box>
                    </Flex>
                  </Box>
               
                  <Link to="/checkout">
                    <Button 
                    style=
                    {{
                      backgroundColor: '#a3b49b',
                      width: '320px',
                      color: '#fff',
                      marginLeft: '2.5rem',
                    }}
                    >
                      {Texts.PROCEED_CHECKOUT}
                      </Button>
                      </Link>
                      <br/><br/>
                  <Link to="/cartPage">
                    <Button 
                    style=
                    {{
                      backgroundColor: '#ffffff',
                      width: '320px',
                      color: '#333333',
                      marginLeft: '2.5rem',
                      marginBottom: '1rem',
                      marginTop: '-1rem'
                    }}
                    >
                      {Texts.VIEW_CART}</Button></Link>
                </Box>
              </MenuList>
            </Menu>            
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default Navbar