import { Flex, Heading } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'

function Success() {
    return (
        <Flex flexDirection="column" alignItems="center">
            <CheckIcon w="150px" h="150px" color="green.400" />
            <Heading as="h1" mt="4" size="2xl" color="green.400">You've made it!</Heading>
        </Flex>
    );
}

export default Success;
