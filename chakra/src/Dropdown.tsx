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
    AccordionPanel,
} from "@chakra-ui/react";
import { HiOutlineCash } from 'react-icons/hi';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { BsChatRightText } from 'react-icons/bs'; 
import { BiWrench } from 'react-icons/bi';
import { TiGlobeOutline } from 'react-icons/ti';
import './Dropdown.css';

const Dropdown = () => {
    const service = { 
        service: 107,
        serv1: 50,
        serv2: 30,
        serv3: 40,
        serv4: 44,
    };

    const cams = {
        cams: 54,
        serv1: 50,
        serv2: 30,
        serv3: 40,
    }

    const chats = {
        chats: 33,
        serv1: 50,
        serv2: 30,
    }

    const fixes = {
        fixes: 65,
        serv1: 50,
        serv2: 30,
        serv3: 40,
        serv4: 44,
    }

    const world = {
        world: 99,
        serv1: 50,
        serv2: 30,
        serv3: 40,
    }

    return (
        <Fragment>
            <Accordion allowToggle>
                <AccordionItem>
                    <Flex p={5}>
                        <Box p={3} w='100%'>
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
                                w='20%' borderTopLeftRadius='lg'
                                borderBottomLeftRadius='lg'>
                                    <Flex justifyContent='space-between' bgColor='lightgray'
                                    className='borderRadii' borderTopLeftRadius='lg'
                                    borderBottomLeftRadius='lg'>
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
                                        <Box className='box'>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv1</Text>
                                                <Text color='green.500' textDecoration='underline'
                                                style={{cursor:'pointer'}}
                                                onClick={()=>{
                                                    console.log('here')
                                                }}>
                                                    {service.serv1}
                                                </Text>
                                            </Flex>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv2</Text>
                                                <Text color='green.500' textDecoration='underline'
                                                style={{cursor:'pointer'}}>
                                                    {service.serv2}
                                                </Text>
                                            </Flex>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv3</Text>
                                                <Text color='green.500' textDecoration='underline'
                                                style={{cursor:'pointer'}}>
                                                    {service.serv3}
                                                </Text>
                                            </Flex>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv4</Text>
                                                <Text color='red' textDecoration='underline'
                                                style={{cursor:'pointer'}}>
                                                    {service.serv4}
                                                </Text>
                                            </Flex>
                                        </Box>
                                    </AccordionPanel>
                                </Box>
                                <Box style={{border:'1px solid black'}}
                                w='20%'>
                                    <Flex justifyContent='space-between' bgColor='lightgray'>
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
                                    <Box>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv1</Text>
                                                <Text color='green.500' textDecoration='underline'>
                                                    {cams.serv1}
                                                </Text>
                                            </Flex>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv2</Text>
                                                <Text color='green.500' textDecoration='underline'>
                                                    {cams.serv2}
                                                </Text>
                                            </Flex>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv3</Text>
                                                <Text color='red' textDecoration='underline'>
                                                    {cams.serv3}
                                                </Text>
                                            </Flex>
                                        </Box>
                                    </AccordionPanel>
                                </Box>
                                <Box style={{border:'1px solid black'}}
                                w='20%'>
                                    <Flex justifyContent='space-between' bgColor='lightgray'>
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
                                        <Box>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv1</Text>
                                                <Text color='green.500' textDecoration='underline'>
                                                    {chats.serv1}
                                                </Text>
                                            </Flex>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv2</Text>
                                                <Text color='red' textDecoration='underline'>
                                                    {chats.serv2}
                                                </Text>
                                            </Flex>
                                        </Box>
                                    </AccordionPanel>
                                </Box>
                                <Box style={{border:'1px solid black'}}
                                w='20%'>
                                    <Flex justifyContent='space-between' bgColor='lightgray'>
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
                                        <Box>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv1</Text>
                                                <Text color='green.500' textDecoration='underline'>
                                                    {fixes.serv1}
                                                </Text>
                                            </Flex>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv2</Text>
                                                <Text color='green.500' textDecoration='underline'>
                                                    {fixes.serv2}
                                                </Text>
                                            </Flex>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv3</Text>
                                                <Text color='green.500' textDecoration='underline'>
                                                    {fixes.serv3}
                                                </Text>
                                            </Flex>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv3</Text>
                                                <Text color='red' textDecoration='underline'>
                                                    {fixes.serv3}
                                                </Text>
                                            </Flex>
                                        </Box>
                                    </AccordionPanel>
                                </Box>
                                <Box style={{border:'1px solid black'}}
                                w='20%' borderTopRightRadius='lg'
                                borderBottomRightRadius='lg'>
                                    <Flex justifyContent='space-between' bgColor='lightgray'
                                    className='borderRadii' borderTopRightRadius='lg'
                                    borderBottomRightRadius='lg'>
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
                                        <Box>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv1</Text>
                                                <Text color='green.500' textDecoration='underline'>
                                                    {world.serv1}
                                                </Text>
                                            </Flex>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv2</Text>
                                                <Text color='green.500' textDecoration='underline'>
                                                    {world.serv2}
                                                </Text>
                                            </Flex>
                                            <Flex justifyContent='space-between'>
                                                <Text>Serv3</Text>
                                                <Text color='red' textDecoration='underline'>
                                                    {world.serv3}
                                                </Text>
                                            </Flex>
                                        </Box>
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