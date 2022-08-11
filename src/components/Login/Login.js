import React from 'react';
import { FaUserAlt, FaLock, FaUserCircle } from 'react-icons/fa';
import {
    Flex,
    Heading,
    FormControl,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Input,
    Button,
    Text,
    Link,
    Icon,
} from '@chakra-ui/react';


function Login({ onEmailChange, onPasswordChange, onSubmit }) {

    const [ display, setDisplay ] = React.useState(false);
    const handleDisplay = () => { setDisplay(!display) };

    return (
        <Flex flexDirection="column" alignItems="center">

            <Icon as={FaUserCircle} w="55px" h="55px" mb="1" color="teal" bg="white" borderRadius="50%" />
            <Heading as="h1" mb="2" size="xl" color="teal.400">Welcome</Heading>

            <form style={{width: "500px"}} onSubmit={onSubmit}>
                <FormControl boxShadow="md" display="flex" flexDirection="column" bg="#FFF" p="5" color="grey">
                
                <InputGroup>
                    <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={FaUserAlt} color="gray.300" />}
                    />
                    <Input
                    id="1"
                    type="email"
                    placeholder="email address"
                    _placeholder={{ color: 'gray.400' }}
                    onChange={onEmailChange}
                    required
                    />
                </InputGroup>

                <InputGroup size="md" mt="5">
                    <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={FaLock} color="gray.300" />}
                    />
                    <Input
                    id="2"
                    type={display ? "text" : "password"}
                    placeholder="Password"
                    _placeholder={{ color: "gray.400" }}
                    mb="2"
                    onChange={onPasswordChange}
                    minLength={1}
                    maxLength={4}
                    required
                    />
                    <InputRightElement w="4.5rem" color="#101010">
                        <Button h="1.75rem" size="sm" onClick={handleDisplay}>{display ? "Hide" : "Show"}</Button>
                    </InputRightElement>
                </InputGroup>

                <Link
                    alignSelf="flex-end"
                    fontSize="14"
                    style={{textDecoration: "none"}}
                    href="https://youtu.be/dQw4w9WgXcQ?t=85"
                    isExternal>
                    forgot password?
                </Link>

                <Button type="submit" w="100%" borderRadius="0px" mt="4" colorScheme="teal">Login</Button>

                </FormControl>
            </form>

            <Text mt="2" color="#101010">New to us? <Link
                                                        color="teal.400"
                                                        style={{textDecoration: "none"}}
                                                        href="https://www.wideview.io/"
                                                        isExternal>
                                                        Sign Up
                                                    </Link>
            </Text>
            
        </Flex>
    );
}

export default Login;
