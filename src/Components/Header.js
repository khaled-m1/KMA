import React from 'react';
import { SimpleGrid, Box, Image, Container, VStack } from '@chakra-ui/react';
import MainImage from '../Img/MainImage.PNG';
const Header = () => {
  return (
    <>
      <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
        <VStack>
          <Container maxW="550px" color="white">
            <Box>
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
