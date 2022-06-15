import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, theme, Text, Spacer, Button } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import InfoModal from './components/InfoModal';
import Board from './components/Board';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
 
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

   const handleClick = i => {
     const boardCopy = [...board];
     // If user click an occupied square or if game is won, return
     if (winner || boardCopy[i]) return;
     // Put an X or an O in the clicked square
     boardCopy[i] = xIsNext ? 'x' : 'o';
     setBoard(boardCopy);
     setXisNext(!xIsNext);
   };
   const resetBoard = () => {
    setBoard(currBoard => currBoard = Array(9).fill(null));
   }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex h="10vh" p={3} justify="flex-end">
          <ColorModeSwitcher />
          <InfoModal />
        </Flex>
        <Flex h="80vh" justify="center" align="center" direction="column" gap='4vh'>
          <Board squares={board} onClick={handleClick} />
          <Text fontSize='2xl'>{winner ? 'The winner is ' + winner.toUpperCase() + '!' : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</Text>
          {winner ? <Button size='lg' onClick={resetBoard}>Play again?</Button> : ''}
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
