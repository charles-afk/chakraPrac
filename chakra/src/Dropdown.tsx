import React from 'react'
import { Box, Text, Flex, Center } from "@chakra-ui/react"
import { HiOutlineCash } from 'react-icons/hi'

const Dropdown = () => {
    const service = { service: 107 }

    return (
        <div>
            <Flex p={5} style={{border:'1px solid black'}} w='100%'>
                <Box p={3} w='100%'>
                    <Flex>
                        <Center>
                            <HiOutlineCash/>&nbsp;
                            <Text>Customer Service</Text>&nbsp;
                            
                        </Center>
                    </Flex>
                    <Flex w='100%'>
                        <Box style={{border:'1px solid black'}}
                        w='20%'>
                            <Flex>
                                <Center>
                                    <HiOutlineCash/>&nbsp;
                                    <Text>Title1</Text>&nbsp;
                                    <Text fontWeight='bold'>
                                        {service.service}
                                    </Text>
                                </Center>
                            </Flex>
                            
                        </Box>
                        <Box style={{border:'1px solid black'}}
                        w='20%'>
                            Title 2
                        </Box>
                        <Box style={{border:'1px solid black'}}
                        w='20%'>
                            Title 3
                        </Box>
                        <Box style={{border:'1px solid black'}}
                        w='20%'>
                            Title 4
                        </Box>
                        <Box style={{border:'1px solid black'}}
                        w='20%'>
                            Title 5
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </div>
    )
}

export default Dropdown