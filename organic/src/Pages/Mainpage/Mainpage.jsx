import React from 'react'
import {Box} from '@chakra-ui/react'
import Categories from '../../Components/Home/Categories/Categories';
import UnlockWisdom from '../../Components/Home/UnlockWisdom/UnlockWisdom';
import Himalaya from '../../Components/Home/HomeImage/Himalaya';
import Mamaearth from '../../Components/Home/HomeImage/Mamaearth';

const Mainpage = () => {
  return (
    <Box >
      <Mamaearth/>
      <Himalaya/>
      <Categories/>
      <UnlockWisdom/>
    </Box>
  )
}

export default Mainpage