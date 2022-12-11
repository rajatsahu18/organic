import { Box, Button } from '@chakra-ui/react'
import React from 'react'

export const ShowMore = ({ showMoreItems }) => {
    return (
        <Box p='2rem'>
            <Button bg='#A6CE3A' color='#fff' position='absolute' left='46.5%' onClick={showMoreItems}>Load more</Button>
        </Box>
    )
}