//import React from 'react';
import './App.css';
import { Box, Text, Flex, Grid, Button } from "@chakra-ui/react"

function App() {
  return (
    <div className="App" style={{backgroundColor: 'gray'}}>

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

      {/** Flexbox */}
      <Box style={{border:'1px solid black'}} 
        display="flex" alignItems="center" justifyContent="space-between">
        Box with Flex props
      </Box>

      <Flex style={{border:'1px solid green'}} 
        align="center" justify="center">
        Flex Container
      </Flex>

      {/* Grid Layout */}
      <Box style={{border:'1px solid black'}} 
        display="grid" gridGap={2} gridAutoFlow="row dense">
        Grid Box
      </Box>

      <Grid style={{border:'1px dotted blue'}}
        gap={2} autoFlow="row dense">
        Grid
      </Grid>

      {/** Background */}
      <Box w="100%" h="1200px"
        backgroundImage="url('https://images.ctfassets.net/sfnkq8lmu5d7/4Ma58uke8SXDQLWYefWiIt/3f1945422ea07ea6520c7aae39180101/2021-11-24_Singleton_Puppy_Syndrome_One_Puppy_Litter.jpg?w=1000&h=750&fl=progressive&q=80&fm=jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />

      <Box
        bgImage="url('/images/gaara.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
      />      

      {/** Borders */}
      <Box border='1px' borderColor='gray.200'>
        Card
      </Box>

      <Button borderRightRadius="0" my={5}>Button 1</Button><br/>
      <Button borderLeftRadius="0" my={5}>Button 2</Button><br/>
      <Button borderTopRadius="md" my={5}>Button 2</Button><br/>

      <Box position="absolute">Cover</Box>
      <Box pos="absolute">Cover</Box>
      <Box pos="absolute" top="0" left="0">
        Absolute with top and left
      </Box>
      <Box pos="fixed" w="100%" zIndex={2}>
        Fixed with zIndex
      </Box>
    </div>
  );
}

export default App;
