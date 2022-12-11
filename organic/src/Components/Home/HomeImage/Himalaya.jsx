import '../../../Common/Common.css'
import { Box, Button, Heading, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import { Texts } from "../../../Common/constants";

const Himalaya=()=>{
    return(
        <Box w='100%' objectFit='cover'>
            <Box className='himalaya'>
                <Heading pt='14%' pl='10%'>
                    <Text fontSize='3rem' color='#000' >{Texts.ASHWAGANDHA}</Text>
                    <Text fontSize='1.3rem' fontWeight='500' color='#000' >{Texts.STAR}</Text>
                    <Button w='10rem' mt='2%' p='1%' fontSize='1.3rem' color='#fff' bg="#A6CE3A" ><Link to="/himalaya">{Texts.SHOP}</Link></Button>
                </Heading>
            </Box>
        </Box>
    )
}
export default Himalaya