import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import InfoModal from './components/InfoModal';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex minH="5vh" p={3} justify="flex-end">
          <ColorModeSwitcher/>
        </Flex>
        <InfoModal />
      </Box>
    </ChakraProvider>
  );
}

export default App;
