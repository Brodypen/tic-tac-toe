import { Grid } from '@chakra-ui/react'
import React from 'react'
import Square from './Square'

const Board = () => {
  return (
    <Grid width='90vw' height='90vw' maxH='500px' maxW='500px' bg='blue.800'templateColumns="repeat(3,1fr)" templateRows="repeat(3,1fr)" border='6px' borderStyle='solid' borderColor='blue.900' borderRadius='lg'>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </Grid>
  );
}

export default Board