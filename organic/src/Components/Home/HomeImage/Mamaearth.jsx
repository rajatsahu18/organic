import '../../../Common/Common.css'
import { Box, Button} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import { Texts } from "../../../Common/constants";

const Mamaearth=()=>{
    return(
        <Box w='100%' objectFit='cover' mt='11.6rem'>
            <Box className='mamaearth'>
                <Button w='10rem' m='22% 0 0 11%' fontSize='1.3rem' color='#fff' bg="#A6CE3A" ><Link to="/mamaearth">{Texts.SHOP}</Link></Button>
            </Box>
        </Box>
    )
}
export default Mamaearth