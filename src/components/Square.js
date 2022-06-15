import React from 'react';
import PropTypes from 'prop-types';
import { Box, Icon} from '@chakra-ui/react';
import { FaTimes, FaCircleNotch } from 'react-icons/fa';
const Square = ({symbol}) => {
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
    >
     {BoxIcon}
    </Box>
  );
};
Square.defaultProps = {
  symbol: ' ',
};
Square.propTypes = {
  symbol: PropTypes.string,
};

export default Square;
