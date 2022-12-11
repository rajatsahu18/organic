import React from "react";
import '../../Common/Common.css';
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import {MdVerified} from 'react-icons/md'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { ShowMore } from "../../Common/ShowMore";

const RightDivShop = (props) => {
  const warning = () => toast.warning("Item already present in Bag");
  const success = () => toast.success("Item Added to Bag");
  const [visible, setVisible] = React.useState(15)

  const showMoreItems = () => {
    setVisible((prev) => prev + 10)
}

  const products = props.data;

  const addtocart = (elem) => {
    axios
      .post(`https://json-mock-server-rajatsahu18.vercel.app/postDataToCart`,{
        name: elem.name,
        img:elem.img,
        price:elem.price,
        count:1
      })
      .then((res) => {
        success()
      })
      .catch((err) => {
        warning()
      });
  };


  return (
    <>
    <Box className="mapping-data">
      {products?.slice(0, visible).map((item) => {
        return (
          <Box m='5%' p='5%' boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px' borderRadius='0.5rem' key={item.id}>
            <Box>
              {item.sell_type ? 
              <Text bg='#FF5B6F' color='#fff' w='fit-content' p='0.2rem' borderRadius='0.4rem 0 0.4rem 0' position='relative' top='-4' left='-4'>BEST SELLER</Text> 
              : <Text bg='#A6CE3A' color='#fff' w='fit-content' p='0.2rem' borderRadius='0.4rem 0 0.4rem 0' position='relative' top='-4' left='-4'>NEW LAUNCH</Text> 
              }
            </Box>
            <Link key={item.id} to={'/'}>
              <Image src={item?.img} alt="missing" />
            </Link>
            <Box>
              <Box>
                <Text fontSize='1rem' color='#A6CE3A' textAlign='center' height='5rem' >{item?.name}</Text>
              </Box>
              <Box display='flex' justifyContent='center' gap='0.2rem'>
                <Text mt='0.1rem' ><FaStar size='0.8rem' color="#A6CE3A" /></Text>
                <Text textAlign='center' fontSize='0.9rem' mr='1rem'>{item.rating}</Text>
                <Text  mt='0.1rem' ><MdVerified size='0.8rem' color="#00AFEF"/></Text>
                <Text textAlign='center' fontSize='0.9rem'>{item.reviews} Reviews</Text>
              </Box>
              <Text fontSize='1.3rem' color='#000' textAlign='center' fontWeight='700' >₹ {item?.price}</Text>
              <Button w='100%' color='#fff' mt='1.4rem' backgroundColor='#00AFEF' onClick={() => addtocart(item)}>ADD TO CART</Button>
            </Box>
          </Box>
        );
      })}
    </Box>
    <ToastContainer />
    {
      products.length === 0 ? '' : <ShowMore showMoreItems={showMoreItems} /> 
    }
    </>
  );
};

export default RightDivShop;
