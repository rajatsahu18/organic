import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import gif from "../../image/gift-box.gif";
import { Link } from "react-router-dom";
import { Texts } from "../../Common/constants";

const BillingPage = () => {
  var seq = (Math.floor(Math.random() * 10000000000000) + 1000000000000)
    .toString()
    .substring(1);
  var reference = (Math.floor(Math.random() * 10000000000000) + 1000000000000)
    .toString()
    .substring(1);

  var dt = new Date();
  dt.setDate(dt.getDate() + 5);

  const [check] = useState(dt.toString());
  console.log(check);


  const [animation,setAnimation] =useState(true);
  setTimeout(() => {
    setAnimation(false);
    
  }, 4000);


  return (
    <Box display='flex' justifyContent='space-around' gap='1rem' p='0 2rem' mt='14rem'>
     {animation ?    <img alt="gif" src={gif} style={{height:"500px"}}/>:   <>
     <Box>
        <Box p='1rem' bg='#edf7ed' boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'>
          <Image
            src="https://tse1.mm.bing.net/th?id=OIP.c0fNDjlEjTOz22FQl4cfLwAAAA&pid=Api&P=0"
            alt=""
            w='4rem'
            m='auto'
          />          
          <Text textAlign='center'>{Texts.PAYMENT_SUCCESSFULL}</Text>
          <Text textAlign='center'>{Texts.YOUR_ORDER}₹ {500} {Texts.IS_PLACED} </Text>
        </Box>

        <Box m='3.5rem' >
          <Button
            p="1.5rem"
            borderRadius="5px"
            bg="#A6CE3A "
            color='#fff'
          >
           <Link to={'/'}>{Texts.GO_TO_ORDER}</Link> 
          </Button>
        </Box>
      </Box>

      {/* Order Details */}
      <Box fontSize='1rem' >
        <Box p='2rem' boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'>
          <Box display='flex' gap='1rem'>
              <Text>{Texts.ORDER_ID}:</Text>
              <Text>{seq}</Text>
          </Box>
          <Box display='flex' gap='1rem'>
              <Text>{Texts.PAYMENT_REF}:</Text>
              <Text>{reference}</Text>
          </Box>
        </Box>
        <Box p='2rem' boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'>
          <Text fontWeight='600'>{Texts.PAYMENT_SUCCESSFULL}</Text>
          <Box display='flex' gap='1rem'>
            <Text >{Texts.ORDER_DATE}:</Text>
            <Text>{check}</Text>
          </Box>
          <Box display='flex' gap='1rem'>
            <Text>{Texts.MODE_PAYMENT}:</Text>
            <Text fontWeight='600'>{Texts.ONLINE}</Text>
          </Box>
        </Box>
        <Text textAlign='center' m='1rem'>
          {Texts.YOUR_ORDER} ₹ 500  {Texts.IS_PLACED}
        </Text>
      </Box>
      </>}
  
    </Box>
  );
};

export default BillingPage;
