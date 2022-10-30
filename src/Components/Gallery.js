import React from 'react';
import {
  Text,
  Container,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
  HStack,
  Box,
} from '@chakra-ui/react';
import { FaConnectdevelop } from 'react-icons/fa';
import Logos from './Logos';
import Projects from './Projects';

const Gallery = () => {
  return (
    <>
      <VStack mt={['10', '20']}>
        <Container maxW="550px">
          <Text fontSize="2xl" fontWeight={'bold'}>
            #🎧
          </Text>
          <Tabs>
            <TabList>
              <Tab>Work with</Tab>
              <Tab>
                <HStack spacing="0px">
                  <Box w="60px"  >
                    Projects
                  </Box>
                  <Box >
                    <Icon as={FaConnectdevelop} mt={'8px !important'}  w={['4', '4']} h={['8', '8']} />
                  </Box>
                </HStack>
              </Tab>
              {/* <Tab>Contact</Tab> */}
            </TabList>

            <TabPanels>
              {/* Panel One */}
              <TabPanel>
                <Logos />
              </TabPanel>
              {/* project */}
              <TabPanel>
                <Projects />
              </TabPanel>
              {/* media */}
              {/* <TabPanel>
                <Media />
              </TabPanel> */}
            </TabPanels>
          </Tabs>
        </Container>
      </VStack>
    </>
  );
};

export default Gallery;
