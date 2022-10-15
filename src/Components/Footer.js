import React from 'react';
import {
  Text,
  Box,
  Image,
  Container,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  Icon,
  Link,
} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <VStack mb={20}>
        <Container maxW="550px">
          <Text fontSize="2xl">#Liked what you saw?</Text>
          <Link href="https://wa.me/+966581298806" isExternal>
            <Text fontSize="1xl">😁 Say Hi</Text>
          </Link>
        </Container>
      </VStack>
    </>
  );
};

export default Footer;
