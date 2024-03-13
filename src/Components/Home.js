import React from "react";
import { Flex, Text, Box, Image, Stack, Button } from '@chakra-ui/react'
import LogoIcon from '../Images/Logo.svg'
import RestaurantFood from '../Images/restaurantfood.jpg'
import bruchetta from '../Images/bruchetta.svg'
import greekSalad from '../Images/greekSalad.svg'
import lemonDessert from '../Images/lemonDessert.svg'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const Home = (props) => {
    return (
        <>
            <Box w='100%' h='60px'>
                <Stack direction='row' paddingLeft='10%' paddingRight='5%' h='full' alignItems='center' justifyContent='space-between'>
                    <Image src={LogoIcon} w='20' h='10' />
                    <Button color='app.primary' variant='ghost' fontSize='sm' fontWeight='bold'>
                        Home
                    </Button>
                    <Button color='app.primary' variant='ghost' fontSize='sm' fontWeight='bold'>
                        About
                    </Button>
                    <Button color='app.primary' variant='ghost' fontSize='sm' fontWeight='bold'>
                        Menu
                    </Button>
                    <Button color='app.primary' variant='ghost' fontSize='sm' fontWeight='bold'>
                        Reservations
                    </Button>
                    <Button color='app.primary' variant='ghost' fontSize='sm' fontWeight='bold'>
                        Order Online
                    </Button>
                    <Button color='app.primary' variant='ghost' fontSize='sm' fontWeight='bold'>
                        Login
                    </Button>
                </Stack>
            </Box>
            <Box bg='#495E57' w='100%' paddingLeft='10%' color='white'>
                <Flex h='full'>
                    <Box flex='2'>
                        <Text color='app.yellow' fontSize='md' fontWeight='bold' pt='30px'>Little Lemon</Text>
                        <Text fontSize='md' fontWeight='bold'>Chicago</Text>
                        <Text maxWidth='50%' pt='30px' pb='30px' fontSize='sm' fontWeight='semibold'>We are a family owned Mediterranean
                            restaurant, focused on
                            traditional recipes served with a modern twist.
                        </Text>
                        <ChakraLink as={ReactRouterLink} to='/BookingForm'>
                            <Button mt='30px' w='200px' bg='app.yellow' color='app.primary' variant='ghost' fontSize='sm' fontWeight='bold' h='50'>
                                Reserve a table
                            </Button>
                        </ChakraLink>
                    </Box>
                    <Box flex='1'>
                        <Image src={RestaurantFood} borderRadius='5%' mt='10%' w='60%' h='100%' alt='Restaurant Food Image' />
                    </Box>
                </Flex>
            </Box>
            <Box bg='white' w='100%' paddingLeft='10%' paddingRight='10%' paddingTop='40px' paddingBottom='40px' color='white'>
                <Flex justify='space-between' paddingBottom='40px' paddingTop='40px' align='center'>
                    <Text color='app.primary' fontSize='md' fontWeight='bold'>This weeks specials!</Text>
                    <Button w='200px' bg='app.yellow' color='app.primary' variant='ghost' fontSize='sm' fontWeight='bold' h='50'>
                        Online Menu
                    </Button>
                </Flex>
                <Flex>
                    <Box flex='1' marginRight='2%' alignItems='start' bg='#D9D9D950'>
                        <Image src={bruchetta} fit='fill' w='100%' alt='Greek Salad' />
                        <Box margin='2%'>
                            <Flex justify='space-between' padding='0'>
                                <Text color='app.primary' fontSize='md' fontWeight='semibold' pt='30px'>Greek Salad</Text>
                                <Text color='app.primary' fontSize='md' fontWeight='semibold' pt='30px'>$12</Text>
                            </Flex>
                            <Text color='app.primary' fontSize='sm' fontWeight='medium' pt='10px'>
                                The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese,
                                garnished with crunchy garlic and rosemary croutons.
                            </Text>
                            <Text color='app.primary' fontSize='sm' fontWeight='bold' pt='20px' pb='20px'>
                                Order a delivery
                            </Text>
                        </Box>
                    </Box>
                    <Box flex='1' marginRight='2%' alignItems='start' bg='#D9D9D950'>
                        <Image src={greekSalad} fit='fill' w='100%' alt='Bruchetta' />
                        <Box margin='2%'>
                            <Flex justify='space-between' padding='0'>
                                <Text color='app.primary' fontSize='md' fontWeight='semibold' pt='30px'>Bruchetta</Text>
                                <Text color='app.primary' fontSize='md' fontWeight='semibold' pt='30px'>$10</Text>
                            </Flex>
                            <Text color='app.primary' fontSize='sm' fontWeight='medium' pt='10px'>
                                Our Bruschetta is made from grilled bread that has been smeared with garlic
                                and seasoned with salt and olive oil.
                            </Text>
                            <Text color='app.primary' fontSize='sm' fontWeight='bold' pt='20px' pb='20px'>
                                Order a delivery
                            </Text>
                        </Box>
                    </Box>
                    <Box flex='1' alignItems='start' bg='#D9D9D950'>
                        <Image src={lemonDessert} fit='fill' w='100%' alt='Lemon Dessert' />
                        <Box margin='2%'>
                            <Flex justify='space-between' padding='0'>
                                <Text color='app.primary' fontSize='md' fontWeight='semibold' pt='30px'>Lemon Dessert</Text>
                                <Text color='app.primary' fontSize='md' fontWeight='semibold' pt='30px'>$5</Text>
                            </Flex>
                            <Text color='app.primary' fontSize='sm' fontWeight='medium' pt='10px'>
                                This comes straight from grandma's recipe book, every last ingredient has been sourced
                                and is as authentic as can be imagined.
                            </Text>
                            <Text color='app.primary' fontSize='sm' fontWeight='bold' pt='20px' pb='20px'>
                                Order a delivery
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default Home;
