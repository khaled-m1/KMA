import React from 'react';
import { SimpleGrid, Box, Image, Container, VStack } from '@chakra-ui/react';
import MainImage from '../Img/MainImage.PNG';
import ReactGA from 'react-ga';
ReactGA.initialize('G-180QLRF8NM'); 
const Header = () => {
  const trackClick = (appName) => {
    console.log(`Tracking click: ${appName}`);
    ReactGA.event({
      category: 'User',
      action: `Clicked on ${appName}`
    });
  };
  return (
    <>
      <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
        <VStack>
          <Container maxW="550px" color="white">
            <Box onClick={() => trackClick('Clicked MainImage')}>
              <Image
                ml={['-6', '-70']}
                mt={['10', 0]}
                boxSize={['110px', '250px']}
                src={MainImage}
                alt="Main Image"
              />
            </Box>
          </Container>
        </VStack>
      </SimpleGrid>
    </>
  );
};

export default Header;
