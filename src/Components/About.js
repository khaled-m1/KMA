import React from 'react';
import {
  Text,
  Container,
  VStack,
  ButtonGroup,
  Link,
  Icon,
} from '@chakra-ui/react';
import {
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import ReactGA from 'react-ga';
ReactGA.initialize('G-180QLRF8NM'); 

const About = () => {
  const trackClick = (action) => {
    console.log(`Tracking click: ${action}`);
    ReactGA.event({
      category: 'User',
      action: action,
    });
  };

  return (
    <>
      <VStack mt={1}>
        <Container maxW="550px">
          <Text fontSize="2xl">Hey i'm</Text>
          <Text fontSize="4xl">Khaled Mojahid</Text>

          <hr />

          <Text fontSize="2xl" mt={4}>
            Web Developer, interested in project management and creative works,
            I will help you in developing and building Websites
          </Text>
          <Text fontSize="1xl" mt={4}>
            Skills: C# / JAVA / Spring boot / .NET / SQL / React js / ChakraUI
          </Text>
          <br />
          <Text fontSize="2xl">Keep it simple.</Text>

          <ButtonGroup spacing="4" mt={4}>
            <Link href="https://github.com/khaled-m1" isExternal onClick={() => trackClick('Clicked Github')}>
              <Icon as={FaGithub} w={['8', '8']} h={['8', '8']} />
            </Link>
            <Link href="https://www.linkedin.com/in/khaled-alanzi/" isExternal onClick={() => trackClick('Clicked Linkedin')}>
              <Icon as={FaLinkedin} w={['8', '8']} h={['8', '8']} />
            </Link>
            <Link href="https://wa.me/+966531293341" isExternal onClick={() => trackClick('Clicked whatsapp')}>
              <Icon as={FaWhatsapp} w={['8', '8']} h={['8', '8']} />
            </Link>
            <Link href="https://www.instagram.com/ikhaledmojahed/" isExternal onClick={() => trackClick('Clicked Instagram')}>
              <Icon as={FaInstagram} w={['8', '8']} h={['8', '8']} />
            </Link>

            <Link href="https://x.com/iKhaledMojahed" isExternal onClick={() => trackClick('Clicked X')}>
              <Icon as={FaTwitter} w={['8', '8']} h={['8', '8']} />
            </Link>

            <Link href="mailto:khaled.mujahid@outlook.sa" isExternal onClick={() => trackClick('Clicked email')}>
              <Icon as={FaEnvelope} w={['8', '8']} h={['8', '8']} />
            </Link>
          </ButtonGroup>
        </Container>
      </VStack>
    </>
  );
};

export default About;
