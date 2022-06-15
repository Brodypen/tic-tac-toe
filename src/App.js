import React from 'react';
import { ChakraProvider, Box, Flex, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import InfoModal from './components/InfoModal';
import Board from './components/Board';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex h="10vh" p={3} justify="flex-end">
          <ColorModeSwitcher />
          <InfoModal />
        </Flex>
        <Flex h="80vh" justify='center' align='center'>
          <Board />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
