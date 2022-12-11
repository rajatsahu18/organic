import React from 'react'
import { Box, Flex, Heading, Image, Text} from '@chakra-ui/react'
import { PARAGRAPH, Texts } from '../../Common/constants'

const OurRoots = () => {
  return (
    <Box px={10}>
    <Flex>
        <Box width={'50%'} p={50}>
            <Image height={'100%'} width={'100%'} src='https://i.shgcdn.com/f95290db-d02e-433c-9564-4766788d684c/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='image' />
        </Box>
        <Box width={'50%'}>
            <Heading color={'green.900'}>{Texts.OUR_ROOTS}</Heading><br/>
            <Text>{PARAGRAPH.OUR_ROOTS}</Text>
        </Box>
    </Flex>
</Box>
  )
}

export default OurRoots