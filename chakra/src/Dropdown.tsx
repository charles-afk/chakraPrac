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
    const service = { service: 107 };

    return (
        <Fragment>
            <Accordion allowToggle>
                <AccordionItem>
                    <Flex p={5} style={{border:'1px solid black'}} 
                    w='100%'>
                        <Box p={3} w='100%'>
                            <Flex>
                                <AccordionButton>
                                    <Center>
                                        <HiOutlineCash/>&nbsp;
                                        <Text>TestingTitle</Text>&nbsp;
                                        <AccordionIcon/>
                                    </Center>
                                </AccordionButton>
                            </Flex>
                            <Flex w='100%'>
                                <Box style={{border:'1px solid black'}}
                                w='20%'>
                                    <Flex>
                                        <Center>&nbsp;
                                            <HiOutlineCash/>&nbsp;
                                            <Text>Title1</Text>&nbsp;
                                            <Text fontWeight='bold'>
                                                {service.service}
                                            </Text>
                                        </Center>
                                    </Flex>
                                    <AccordionPanel>
                                        Text
                                    </AccordionPanel>
                                </Box>
                                <Box style={{border:'1px solid black'}}
                                w='20%'>
                                    <Flex>
                                        <Center>&nbsp;
                                            <AiOutlineVideoCamera/>&nbsp;
                                            <Text>Title2</Text>&nbsp;
                                            <Text fontWeight='bold'>
                                                {service.service}
                                            </Text>
                                        </Center>
                                    </Flex>
                                    <AccordionPanel>
                                        Text
                                    </AccordionPanel>
                                </Box>
                                <Box style={{border:'1px solid black'}}
                                w='20%'>
                                    <Flex>
                                        <Center>&nbsp;
                                            <BsChatRightText/>&nbsp;
                                            <Text>Title3</Text>&nbsp;
                                            <Text fontWeight='bold'>
                                                {service.service}
                                            </Text>
                                        </Center>
                                    </Flex>
                                    <AccordionPanel>
                                        Text
                                    </AccordionPanel>
                                </Box>
                                <Box style={{border:'1px solid black'}}
                                w='20%'>
                                    <Flex>
                                        <Center>&nbsp;
                                            <BiWrench/>&nbsp;
                                            <Text>Title4</Text>&nbsp;
                                            <Text fontWeight='bold'>
                                                {service.service}
                                            </Text>
                                        </Center>
                                    </Flex>
                                    <AccordionPanel>
                                        Text
                                    </AccordionPanel>
                                </Box>
                                <Box style={{border:'1px solid black'}}
                                w='20%'>
                                    <Flex>
                                        <Center>&nbsp;
                                            <TiGlobeOutline/>&nbsp;
                                            <Text>Title5</Text>&nbsp;
                                            <Text fontWeight='bold'>
                                                {service.service}
                                            </Text>
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