import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, Box, Image, Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { Texts } from "../../Common/constants";


const CartPage = () => {

  const success = () => toast.success("Item Deleted from Cart");
  const [showButton, setShowButton] = useState(false);

    const [cartData, setCartData]= useState([])
    const navigate= useNavigate()

    const fetchCartFunction = () => {
        axios.get(`https://json-mock-server-rajatsahu18.vercel.app/postDataToCart`)
        .then((res)=>setCartData(res.data))
        .catch((err)=>console.log(err))
    }

    const handleProceedCheckout = () => {
        navigate("/checkout");
        
    }

    const backToProductPage = () => {
        navigate("/himalaya");
        }

    const handleCartItemDelete = (id) => {
        axios.delete(`https://json-mock-server-rajatsahu18.vercel.app/postDataToCart/${id}`)
        success()
    }

    const handleChangeQuantity = (x, id, y) => {
        
            axios.patch(`https://json-mock-server-rajatsahu18.vercel.app/postDataToCart/${id}`,{
            count : y + x
        })
        fetchCartFunction()
    }

    const deleteAll = () => {
        cartData.forEach((elm) => {
            axios
            .delete(`https://json-mock-server-rajatsahu18.vercel.app/postDataToCart/${elm.id}`)
        })
        setCartData([]);
     }


    let total_price = 0;
        
        for( let i = 0; i < cartData.length; i++ ) {
            total_price += (cartData[i].price * cartData[i].count);
        }

    useEffect(() => {
        fetchCartFunction();
    },[cartData])


    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        });
      }, []);

    return (
        <>
        <Box w="100%" mt='11.2rem'>
            <Box>
                <Text textAlign='center' fontSize="4xl" fontWeight="semibold" >{Texts.SHOPPING_CART}</Text>
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' gap='40rem' p='2rem' mb= '2rem'>
                <Box>
                    <Button  bg = 'none' onClick={backToProductPage}>
                        <Text>{Texts.CONTINUE_SHOPPING}</Text>
                    </Button>
                </Box>
                <Box>
                    <Button bg = 'none' onClick={() => deleteAll()} >
                        <AiOutlineDelete size="2rem" />
                        <Text>{Texts.CLEAR_CART}</Text>
                    </Button>
                </Box>
            </Box>
            <Box w="100%" padding="1rem 15rem" >
                {
                    cartData.length > 0 && cartData.map(({img, name, id, price, count}) => {
                        return(
                            <Box display='flex' border= '1px solid #808080' borderRadius='1rem' p='2% 0' width='100%' justifyContent='space-around' alignItems='center' m='1rem' key={id}>
                                <Box width= "200px">
                                    <Image height= '10rem' width= '20rem'  src={img} />
                                </Box>
                                <Box>
                                    <Text fontSize="1.5rem" color="#A6CE3A" fontWeight="600"> ₹ {price}</Text>                                  
                                </Box>
                                <Box fontSize="1.4rem" textAlign="left" width= "24rem" fontWeight="600" >
                                    <Text>{name}</Text>
                                </Box>
                                <Box display='flex' bg= "#00AFEF" color='#fff'>
                                    <Button bg="#00AFEF" fontSize="4xl" _hover='none' fontWeight="200" onClick={ () => { if (count > 1){handleChangeQuantity(-1, id, count)}}} >
                                            -
                                    </Button>
                                    <Text fontSize="2xl">
                                        {count}
                                    </Text>

                                    <Button bg="#00AFEF" fontSize="3xl" _hover='none'  fontWeight="200" onClick={()=>{if(count<4){handleChangeQuantity(+1, id, count)}}} >
                                        +
                                    </Button>
                                </Box>

                                <Box>
                                    <Text fontSize="1.5rem" color="#A6CE3A" fontWeight="600">
                                    ₹ {(price * count).toFixed(2)}
                                    </Text>
                                </Box>
                                <Button  bg= "none" _hover='none' color="#00AFEF" onClick={()=>handleCartItemDelete(id)} >
                                    <AiOutlineDelete size="2rem" />
                                </Button>
                            </Box>
                        )
                    })
                }
            </Box>
            {
                cartData.length === 0 ? '' : 
                <Box borderRadius='1rem' bg="#00AFEF" padding="3% 10%" m='3% 29%' color= "white" >
                <Box>
                    <Text  fontWeight="600" fontSize="2rem" textAlign='center'>
                        {Texts.GRAND_TOTAL} {total_price.toFixed(2)}
                    </Text>
                </Box>
                <Box padding="3% 2%"  m='1% 18%'>
                    <Button size="md" bg="#fff" color="#00AFEF"  onClick={handleProceedCheckout} >
                        {Texts.PROCEED_CHECKOUT}
                    </Button>
                </Box>
            </Box>
            }
        </Box>
        <ToastContainer />
        </>
    )
}
export default CartPage;