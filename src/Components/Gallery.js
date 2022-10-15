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
} from '@chakra-ui/react';
import Logos from './Logos';
import Projects from './Projects';
import Media from './Media';

const Gallery = () => {
  return (
    <>
      <VStack mt={['10','20']}>
        <Container maxW="550px">
          <Text fontSize="2xl" fontWeight={'bold'}>
            #🎧
          </Text>
          <Tabs>
            <TabList>
              <Tab>Work with</Tab>
              <Tab>Projects</Tab>
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
