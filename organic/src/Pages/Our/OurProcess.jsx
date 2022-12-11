import React from 'react'
import { Box, Flex, Heading, Image, Text} from '@chakra-ui/react'
import { PARAGRAPH, Texts } from '../../Common/constants'

const OurProcess = () => {
  return (
    <Box px={10}>
    <Flex>
        <Box width={'50%'} p={7}>
            <Image height={'100%'} width={'100%'} src='https://i.shgcdn.com/a802e384-7312-4d13-bda1-8859e1afaecf/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='image' />
        </Box>
        <Box width={'50%'} p={7}>
            <Heading color={'green.900'}>{Texts.PURITY_EFFICIENCY}</Heading><br/>
            <p>{PARAGRAPH.OUR_PROCESS}</p>
            
        </Box>
    </Flex>
    <Flex>
    <Box width={'50%'}  p={7}>
            <Heading color={'green.900'}>{PARAGRAPH.OUR_FARMS}</Heading><br/>
            <Text>{PARAGRAPH.HERBS_GROWN}</Text>
        </Box>
        <Box width={'50%'}  p={7}>
            <Image height={'100%'} width={'100%'} src='https://i.shgcdn.com/6fdef74e-1e57-4bd4-8f3f-617132184feb/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='image' />
        </Box>
    </Flex>
</Box>
  )
}

export default OurProcess