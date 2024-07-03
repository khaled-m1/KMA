import React from 'react';
import { Text, Container, VStack, Link, Button } from '@chakra-ui/react';
const Footer = () => {
  return (
    <>
      <VStack mb={[20, 0]} mt={[5, 10]}>
        <Container maxW="550px">
          <Text fontSize="2xl">Deal?</Text>
          <Link href="https://wa.me/+966531293341" isExternal>
            <Button colorScheme="teal" p={3} variant="outline">
              😁 Say Hi
            </Button>
            {/* <Text fontSize="1xl" backgroundColor={'teal'} color={'#fff'} borderRadius={'4px'}  p={3} w={'100px'}></Text> */}
          </Link>
        </Container>
      </VStack>
    </>
  );
};

export default Footer;
