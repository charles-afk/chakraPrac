//import React from 'react';
import './App.css';
import { Box, Text } from "@chakra-ui/react"

function App() {
  return (
    <div className="App">

      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>

      <Box maxW="960px" mx="auto"
        p={[2,3]}
        color='blue.50'
        bg='tomato'
      >
        Box1
      </Box>

      <Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" />
      <Box w="100%" h="200px" bgGradient="radial(gray.300, yellow.400, pink.200)" />

      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        // fontSize='md'
        // fontSize={32}
        // fontSize='2em'
        textAlign={['left','center']}
        fontWeight="extrabold"
      >
        Welcome to Chakra UI Text!
      </Text>

      {/** Layout, width and height */}
      <Box style={{border:'1px solid black'}}
        width="100%" height={32}
      >
        Welcome
      </Box>

      <Box style={{border:'1px solid black'}}
        w="100%" h="32px" 
      >
        To
      </Box>

      <Box style={{border:'1px solid black'}}
        boxSize="sm"
      >
        Chakra
      </Box>

      <Box style={{border:'1px solid black'}}
        w={256} 
      >
        UI
      </Box>

      <Box style={{border:'1px solid black'}}
        w='40px' 
      >
        !
      </Box>
    </div>
  );
}

export default App;
