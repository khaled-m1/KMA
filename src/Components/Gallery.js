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
import ReactGA from 'react-ga';
ReactGA.initialize('G-180QLRF8NM'); 

const Gallery = () => {
  const trackClick = (appName) => {
    console.log(`Tracking click: ${appName}`);
    ReactGA.event({
      category: 'User',
      action: `Clicked on ${appName}`
    });
  };
  return (
    <>
      <VStack mt={['10', '10']}>
        <Container maxW="550px">
          <Text fontSize="2xl" fontWeight={'bold'}>
            #🎧
          </Text>
          <Tabs >
            <TabList>
            <Tab cursor='pointer' as='b' border='0.1px solid gray' borderRadius="md" onClick={() => trackClick('Clicked Work with')}>Work with</Tab>
              <Tab cursor='pointer' as='b' border='0.1px solid gray' borderRadius="md" ml='5px' onClick={() => trackClick('Clicked Projects')}>
              Projects
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
            </TabPanels>
          </Tabs>
        </Container>
      </VStack>
    </>
  );
};

export default Gallery;
