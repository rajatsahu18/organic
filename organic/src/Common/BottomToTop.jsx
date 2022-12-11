import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowUp } from "react-icons/io";

const BottomToTop = () => {
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };

  return (
    <Box>
        <Button style={{ position: 'absolute', right: 10, bottom: 10, backgroundColor: '#A6CE3A', color: 'white', height: '3.5rem' }} onClick={scrollToTop}>
          <IoIosArrowUp size="32"/>
        </Button>
    </Box>
  )
}

export default BottomToTop