import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import OurStory from '../Our/OurStory'
import OurRoots from '../Our/OurRoots'
import OurProcess from '../Our/OurProcess'
import { Texts } from '../../Common/constants'

const About = () => {
    const [ourStory, setOurStory] = useState(false);
    const [ourRoots, setOurRoots] = useState(false);
    const [ourProcess, setOurProcess] = useState(false);

    const handleStory = () =>{
        setOurStory(true);
        setOurRoots(false);
        setOurProcess(false);
    }
    const handleRoots = () =>{
        setOurStory(false);
        setOurRoots(true);
        setOurProcess(false);
    }
    const handleProcess = () =>{
        setOurStory(false);
        setOurRoots(false);
        setOurProcess(true);
    }
    useEffect(()=>{
        setOurStory(true);
    },[])

    const url = 'https://i.shgcdn.com/f95290db-d02e-433c-9564-4766788d684c/-/format/auto/-/preview/3000x3000/-/quality/lighter/'
    return (
        <Box>
            <Box backgroundImage={url} width='100%' backgroundSize='cover' height='23rem'>
                <Flex justifyContent={'center'} color={'white'}>
                    <Flex flexDirection={'column'} textAlign={'center'} pt={150} width={'700px'} margin={'auto'}>
                        <Heading size={'2xl'}>{Texts.OUR_STORY}</Heading>
                        <Text fontWeight={600} >{Texts.FOUNDED}</Text>
                    </Flex>
                </Flex>
            </Box>
            <Box>
                <Flex borderBottom='5px solid red' justifyContent='space-evenly' m='2rem 2rem' p='3rem' >
                    <Box><Button colorScheme={'green'} onClick={handleStory} >{Texts.OUR_STORY}</Button></Box>
                    <Box><Button colorScheme={'green'} onClick={handleRoots}>{Texts.OUR_ROOTS}</Button></Box>
                    <Box><Button colorScheme={'green'} onClick={handleProcess}>{Texts.OUR_PROCESS}</Button></Box>
                </Flex>
            </Box>
            <Box>
                {
                    ourStory?<OurStory />:""
                }
                {
                    ourRoots?<OurRoots/>:""
                }
                {
                    ourProcess?<OurProcess />:""
                }
            </Box>


        </Box>
    )
}

export default About