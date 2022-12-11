import React from 'react'
import {Box} from '@chakra-ui/react'
import Categories from '../../Components/Home/Categories/Categories';
import UnlockWisdom from '../../Components/Home/UnlockWisdom/UnlockWisdom';
import Testimonial from '../../Components/Home/Testimonial/Testimonial';
import { ImageTestimonial } from '../../Components/Carousel/ImageTestimonial';



const Mainpage = () => {
  return (
    <Box >
      <ImageTestimonial/>
      <Categories/>
      <UnlockWisdom/>
      <Testimonial/>
    </Box>
  )
}

export default Mainpage