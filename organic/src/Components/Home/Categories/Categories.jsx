import {Link} from 'react-router-dom';
import { himalaya, mamaearth } from "../../../Common/data";
import { Texts } from "../../../Common/constants";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const Categories=()=>{
    return(
        <>
            <Box padding='5%'>
                <Heading textAlign='center' p='3%'>{Texts.MAMAEARTH}</Heading>
                <Link to='/mamaearth'>
                    <Box display='flex' justifyContent='center' alignItems='center' gap='1%'>
                        {mamaearth.map((item)=>(
                            <Box>
                                <Image src={item.img} width="250px"/>
                                <Text fontSize='1.2rem' textAlign='center' color='#000'><Link to="/mamaearth">{item.head}</Link></Text>
                                <Text fontSize='1rem' textAlign='center' color='#a3b49b'>{item.des}</Text>
                            </Box>
                        ))}
                    </Box>
                </Link>
            </Box>
            <Box padding='5%'>
                <Heading textAlign='center' p='3%'>{Texts.HIMALAYA}</Heading>
                <Link to='/mamaearth'>
                    <Box display='flex' justifyContent='center' alignItems='center' gap='1%'>
                        {himalaya.map((item)=>(
                            <Box className = 'style.items'>
                                <Image src={item.img} width="250px"/>
                                <Text fontSize='1.2rem' textAlign='center' color='#000'><Link to="/mamaearth">{item.head}</Link></Text>
                                <Text fontSize='1rem' textAlign='center' color='#a3b49b'>{item.des}</Text>
                            </Box>
                        ))}
                    </Box>
                </Link>
            </Box>
        </>
    )
}
export default Categories;