import { Box, Text } from "@chakra-ui/react";

const Filter = ({queryData}) => {

  return (
    <Box display='flex' m='0 13% 0 13%' cursor='pointer'>
        <Text border='1px solid #00AFEF' borderRadius='1rem' bg='#fff' color='#00AFEF' p='0.5%' m='1%' textAlign='center' onClick={() => queryData('products')}>All</Text>
        <Text border='1px solid #00AFEF' borderRadius='1rem' bg='#fff' color='#00AFEF' p='0.5%' m='1%' textAlign='center' onClick={() => queryData('Herbal Supplements')}>Herbal Supplements</Text>
        <Text border='1px solid #00AFEF' borderRadius='1rem' bg='#fff' color='#00AFEF' p='0.5%' m='1%' textAlign='center' onClick={() => queryData('Oral Care')}>Oral Care</Text>
        <Text border='1px solid #00AFEF' borderRadius='1rem' bg='#fff' color='#00AFEF' p='0.5%' m='1%' textAlign='center' onClick={() => queryData('Personal Care')}>Personal Care</Text>
    </Box>
  );
};

export default Filter