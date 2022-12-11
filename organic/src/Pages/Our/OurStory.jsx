import { Box, Flex, Heading, Image, Text} from '@chakra-ui/react'
import React from 'react'
import { PARAGRAPH, Texts } from '../../Common/constants'

const OurStory = () => {
  return (
    <Box px={10}>
        <Flex>
        <Box width={'50%'}>
                <Heading color={'green.900'}>{Texts.LEGACY}</Heading><br/>
                <Text>{PARAGRAPH.OUR_STORY}</Text>               
            </Box>
            <Box width={'50%'}>
                <Image height={'100%'} width={'100%'} src='https://i.shgcdn.com/59ff8391-0e4c-47df-9848-556c4521753e/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='image' />
            </Box>
            
        </Flex>
    </Box>
  )
}

export default OurStory