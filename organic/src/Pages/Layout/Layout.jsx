import { Box } from '@chakra-ui/react'
import React from 'react'
import BottomToTop from '../../Common/BottomToTop'
import {Footer} from "../../Components/Footer/Footer"
import Navbar from '../../Components/Home/Navbar/Navbar'
import AllRoutes from '../Routes/AllRoutes'

const Layout = ({children}) => {
    return (
        <Box>
           <Navbar />
           <Box marginTop={'135px'}>
                <AllRoutes />
           </Box>
            {children}
            <BottomToTop/>
            <Footer/>
        </Box>
      )
}

export default Layout