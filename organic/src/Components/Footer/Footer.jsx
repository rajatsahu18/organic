import React from "react";
import {
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
  
import {
    AiFillFacebook,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillYoutube,
  } from "react-icons/ai";
import { Texts } from "../../Common/constants";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
  
  <Box p="3rem" bg="#00AFEF" mt='15.4rem' position='relaive' zIndex='999' bottom='0' w='100%' display='flex' color='#fff' justifyContent='space-around'>
        <Flex flexDirection="column"  >
            <Heading size="md" >{Texts.INFO}</Heading><br/>
            <Link to="/">{Texts.CONTACT}</Link>
            <Link to="/">{Texts.FAQ}</Link>
            <Link to="/">{Texts.BLOG}</Link>
            <Link to="/">{Texts.STORE}</Link>
            <Link to="/">C{Texts.CAREERS}</Link>
        </Flex>
        <Flex flexDirection="column">
          <Heading size="md" >{Texts.INFO}</Heading><br/>
          <Link to="/">{Texts.SHIPPING}</Link>
          <Link to="/">{Texts.TERMS}</Link>
          <Link to="/">{Texts.ACCESSIBILITY}</Link>
        </Flex>
        <Flex flexDirection="column">
          <Heading size="md" >{Texts.CONTACT_COMPANY}</Heading><br/>
          <Heading size="md"  >{Texts.EMAIL}</Heading>
          <Link to="/">{Texts.E_ADDRESS}</Link>
          <Heading size="md" >{Texts.PHONE}</Heading>
          <Link to="/">{Texts.M_NUMBER}</Link>
          <Heading size="md"  >{Texts.MAIL}</Heading>
          <Link to="/">{Texts.HIMALAYA_WELLNESS}</Link>
          <Link to="/">{Texts.HIMALAYA_ADDRESS}</Link>
        </Flex>
        <Box>
          <Heading size="md" >{Texts.FOLLOW}</Heading><br/>
            <Box display='flex'>
                <Link to="/"><AiFillFacebook size='2rem'/></Link>
                <Link to="/"><AiOutlineTwitter size='2rem'/></Link>
                <Link to="/"><AiFillInstagram size='2rem'/></Link>
                <Link to="/"><AiFillYoutube size='2rem'/></Link>
            </Box>
        </Box>
  </Box>
  
   
  );
};
