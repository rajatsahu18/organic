import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { PARAGRAPH, Texts } from "../../../Common/constants";

const UnlockWisdom=()=>{
    return(
      <Box display='flex' mt='5%' h='25rem' boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'>
          <Box ml='10%'>
            <Image m='10%' h='20rem' w='100%' src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/StressCareA-Main-647x1024.png?v=1591359475"/>
          </Box>
          <Box m='5%'>
            <Heading m='1% 0 1% 0'>{Texts.WISDOM}</Heading>
            <Text fontSize='1.7rem' fontWeight='400' >{Texts.HERBAL_SUPPLEMENTS}</Text>
            <Text fontSize='16px' fontWeight='400' mt='2%' >{PARAGRAPH.SINCE}</Text>
          </Box>
      </Box>
    )
}
export default UnlockWisdom