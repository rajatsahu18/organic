import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { testimonial } from "../../../Common/data";
  
export default function Testimonial() {

const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2
};

return (
        <Box p='6%'>
            <Slider {...settings}>
            {testimonial.length > 0 && testimonial?.map((item) => {
                return  (
                <Box textAlign='center'>
                    <Text color='#333333' pt='10%'>{item.desc}</Text>
                    <Text fontSize='1rem' color='#ababab' mt='5%'>{item.brandName}</Text>
                </Box>
                )
                })}
            </Slider>
        </Box>
    )
}