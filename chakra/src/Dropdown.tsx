import { Fragment } from 'react';
import { 
    Box, 
    Text, 
    Flex, 
    Center, 
    Accordion, 
    AccordionItem,
    AccordionButton,
    AccordionIcon, 
    AccordionPanel
} from "@chakra-ui/react";
import { HiOutlineCash } from 'react-icons/hi';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { BsChatRightText } from 'react-icons/bs'; 
import { BiWrench } from 'react-icons/bi';
import { TiGlobeOutline } from 'react-icons/ti'

const Dropdown = () => {
    const service = { 
        service: 107,
    };

    const cams = {
        cams: 54,
    }

    const chats = {
        chats: 33,
    }

    const fixes = {
        fixes: 65,
    }

    const world = {
        world: 99
    }

    return (
        <Fragment>
            <Accordion allowToggle>
                <AccordionItem>
                    <Flex p={5} style={{border:'1px solid black'}} 
                    w='100%'>
                        <Box p={3} w='100%' >
                            <Flex>
                                <AccordionButton>
                                    <Center>
                                        <HiOutlineCash/>&nbsp;
                                        <Text>Testing Title</Text>&nbsp;
                                        <AccordionIcon/>
                                    </Center>
                                </AccordionButton>
                            </Flex>
                            <Flex w='100%'>
                                <Box style={{border:'1px solid black'}}
                                w='20%' borderTopLeftRadius='2xl'
                                borderBottomLeftRadius='2xl'>
                                    <Flex justifyContent='space-between'>
                                        <Center>&nbsp;
                                            <HiOutlineCash/>&nbsp;
                                            <Text fontWeight='bold'>Money</Text>&nbsp;
                                        </Center>
                                        <Center>
                                            <Text fontWeight='bold' color='green'>
                                                {service.service}
                                            </Text>&nbsp;
                                        </Center>
                                    </Flex>
                                    <AccordionPanel>
                                        Text
                                    </AccordionPanel>
                                </Box>
                                <Box style={{border:'1px solid black'}}
                                w='20%'>
                                    <Flex justifyContent='space-between'>
                                        <Center>&nbsp;
                                            <AiOutlineVideoCamera/>&nbsp;
                                            <Text fontWeight='bold'>Cameras</Text>&nbsp;
                                        </Center>
                                        <Center>
                                            <Text fontWeight='bold' color='green'>
                                                {cams.cams}
                                            </Text>&nbsp;
                                        </Center>
                                    </Flex>
                                    <AccordionPanel>
                                        Text
                                    </AccordionPanel>
                                </Box>
                                <Box style={{border:'1px solid black'}}
                                w='20%'>
                                    <Flex justifyContent='space-between'>
                                        <Center>&nbsp;
                                            <BsChatRightText/>&nbsp;
                                            <Text fontWeight='bold'>Chats</Text>&nbsp;
                                        </Center>
                                        <Center>
                                            <Text fontWeight='bold' color='green'>
                                                {chats.chats}
                                            </Text>&nbsp;
                                        </Center>
                                        
                                    </Flex>
                                    <AccordionPanel>
                                        Text
                                    </AccordionPanel>
                                </Box>
                                <Box style={{border:'1px solid black'}}
                                w='20%'>
                                    <Flex justifyContent='space-between'>
                                        <Center>&nbsp;
                                            <BiWrench/>&nbsp;
                                            <Text fontWeight='bold'>Fixes</Text>&nbsp;
                                        </Center>
                                        <Center>
                                            <Text fontWeight='bold' color='green'>
                                                {fixes.fixes}
                                            </Text>&nbsp;
                                        </Center>
                                    </Flex>
                                    <AccordionPanel>
                                        Text
                                    </AccordionPanel>
                                </Box>
                                <Box style={{border:'1px solid black'}}
                                w='20%' borderTopRightRadius='2xl'
                                borderBottomRightRadius='2xl'>
                                    <Flex justifyContent='space-between'>
                                        <Center>&nbsp;
                                            <TiGlobeOutline/>&nbsp;
                                            <Text fontWeight='bold'>World</Text>&nbsp;
                                        </Center>
                                        <Center>
                                            <Text fontWeight='bold' color='green'>
                                                {world.world}
                                            </Text>&nbsp;
                                        </Center>
                                    </Flex>
                                    <AccordionPanel>
                                        Text
                                    </AccordionPanel>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </AccordionItem>
            </Accordion>
        </Fragment>
    );
}

export default Dropdown;