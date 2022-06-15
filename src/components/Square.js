import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Icon } from '@chakra-ui/react'
import { FaTimes, FaCircleNotch } from 'react-icons/fa'
const Square = props => {
  return (
    <Box
      bg="blue.700"
      border="6px"
      borderStyle="solid"
      borderColor="blue.900"
      borderRadius="sm"
    >
      
        <Icon as={FaTimes} color="white" minH='100%' minW='80%'/>

    </Box>
  );
}

Square.propTypes = {}

export default Square