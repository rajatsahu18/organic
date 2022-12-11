import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  Image,
  Button,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { Texts } from "../../Common/constants";

const CheckoutPayment = () => {
  const [cartData, setCartData] = useState([]);
  const [promoText, setPromoText] = useState("");

  let total_price = 0;
  let promo_price = 0;

  for (let i = 0; i < cartData.length; i++) {
    total_price += cartData[i].price * cartData[i].count;
  }

  const getchMineCart = () => {
    axios
      .get(`https://json-mock-server-rajatsahu18.vercel.app/postDataToCart`)
      .then((res) => setCartData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getchMineCart();
  }, [total_price]);

  if (promoText === "REDEEM20") {
    promo_price = total_price * 0.2;
  }

  if (promoText === "HIMALAYA20") {
    promo_price = total_price * 0.2;
  }

  if (promoText === "BODY25") {
    promo_price = total_price * 0.25;
  }
  

  return (
    <Box backgroundColor= "#f4f7f3" marginTop='3rem'>
      <Box>
        {cartData.map(({ id, price, name, img, count }) => {
          return (
            <Box display='flex' bg='#fff' m='1%' color='#000' p='1rem'>
              <Box m='0 5% 0 0'>
                <Image h='5rem' src={img} />
              </Box>
              <Box w='70%'>
                  <Text fontSize="0.8rem">{name}</Text>
                  <Text fontSize="0.8rem">qty: {count}</Text>
                  <Text fontSize="0.8rem"> ₹ {price}</Text>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box display='flex'>
        <Input bg="white" size="md" m='1%' onChange={(e) => setPromoText(e.target.value)} />
        <Button bg="#00AFEF" color='#fff' m='1%' size="md" > {Texts.APPLY}</Button>
      </Box>

      <Box display='flex' m='1rem 1rem'>
        <Box width='50%'>
          <Text color="#000" fontSize="1rem">{Texts.TOTAL}</Text>
          <Text color="#000" fontSize="1rem">{Texts.SHIPPING}</Text>
          <Text color="#000" fontSize="1rem">{Texts.DISCOUNT}</Text>
        </Box>
        <Box width='50%' textAlign='right'>
          <Text color="#000" fontSize="1rem"> ₹ {total_price.toFixed(2)}</Text>
          <Text color="#000" fontSize="1rem"> ₹ 50 </Text>
          <Text color="#000" fontSize="1rem"> ₹ {promo_price.toFixed(2)} </Text>
        </Box>
      </Box>

      <Box display='flex' m='1rem 1rem'>
        <Box width='50%'>
          <Text fontSize="2rem">{Texts.TOTAL}</Text>
        </Box>
        <Box width='50%'textAlign='right'>
          <Text fontSize="2rem"> ₹ {(total_price + 5 - promo_price).toFixed(2)}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutPayment;
