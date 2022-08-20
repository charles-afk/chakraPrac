import React from 'react';
import logo from './logo.svg';
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
    </div>
  );
}

export default App;
