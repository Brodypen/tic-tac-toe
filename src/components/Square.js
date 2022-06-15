import React from 'react';
import { Box, Icon} from '@chakra-ui/react';
import { FaTimes, FaCircleNotch } from 'react-icons/fa';
const Square = ({symbol, onClick}) => {
  let BoxIcon;
   if (symbol === 'x') {
     BoxIcon = <Icon as={FaTimes} color='purple.200' minH="100%" minW="80%" />;
   } else if (symbol === 'o') {
     BoxIcon = <Icon as={FaCircleNotch} color='yellow.200' minH="100%" minW="80%" />;
   }

  return (
    <Box
      bg="blue.700"
      border="6px"
      borderStyle="solid"
      borderColor="blue.900"
      borderRadius="sm"
      onClick={onClick}
    >
     {BoxIcon}
    </Box>
  );
};
Square.defaultProps = {
  symbol: ' ',
};

export default Square;
