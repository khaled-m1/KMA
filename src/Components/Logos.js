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
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import logo1 from '../Img/Logos/emcrey.png';
import logo2 from '../Img/Logos/vib.png';
import logo3 from '../Img/Logos/doo1.png';
import logo4 from '../Img/Logos/1.png';
import logo5 from '../Img/Logos/lens1.png';
import logo6 from '../Img/Logos/safcsp.png';
import logo7 from '../Img/Logos/1.4.png';
import logo8 from '../Img/Logos/1.10.png';
import logo9 from '../Img/Logos/1.2.png';
import logo10 from '../Img/Logos/LogoPro.png';
import logo11 from '../Img/Logos/1.3.png';
import logo12 from '../Img/Logos/anaslogoColor.png';
import logo13 from '../Img/Logos/1.8.png';
import logo14 from '../Img/Logos/tarjim.png';
import logo15 from '../Img/Logos/1.5.png';
import logo16 from '../Img/Logos/1.7.png';
import logo17 from '../Img/Logos/1.6.png';
import logo18 from '../Img/Logos/b1.png';
import logo19 from '../Img/Logos/1.9.png';
// Light
import logw1 from '../Img/Logos/emcray-w.png';
import logw2 from '../Img/Logos/doo2.png';
import logw3 from '../Img/Logos/lens2.png';
import logw4 from '../Img/Logos/sap2.png';
import logw5 from '../Img/Logos/LogoProWhite.png';
import logw6 from '../Img/Logos/anaslogoWhite.png';
import logw7 from '../Img/Logos/emd2.png';
import logw8 from '../Img/Logos/tarj2.png';
import logw9 from '../Img/Logos/num2.png';
import logw10 from '../Img/Logos/ahmed2.png';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Logos = () => {
  return (
    <>
      <SimpleGrid columns={3} spacing={1}>
        <Box height="150px">
          <Image src={useColorModeValue(logo1, logw1)} />
        </Box>

        <Box height="150px">
          <Image src={logo2} />
        </Box>
        <Box height="150px">
          <Image src={useColorModeValue(logo3, logw2)} />
        </Box>

        <Box height="150px">
          <Image src={logo4} />
        </Box>
        <Box height="150px">
          <Image src={useColorModeValue(logo5, logw3)} />
        </Box>
        <Box height="150px">
          <Image src={useColorModeValue(logo6, logw4)} />
        </Box>
        <Box height="150px">
          <Image src={logo7} />
        </Box>
        <Box height="150px">
          <Image src={logo8} />
        </Box>
        <Box height="150px">
          <Image src={logo9} />
        </Box>
        <Box height="150px">
          <Image src={useColorModeValue(logo10, logw5)} />
        </Box>
        <Box height="150px">
          <Image src={logo11} />
        </Box>
        {/*  */}
        <Box height="150px">
          <Image src={useColorModeValue(logo12, logw6)} />
        </Box>
        <Box height="150px">
          <Image src={useColorModeValue(logo13, logw7)} />
        </Box>
        <Box height="150px">
          <Image src={useColorModeValue(logo14, logw8)} />
        </Box>
        <Box height="150px">
          <Image src={useColorModeValue(logo15, logw9)} />
        </Box>
        <Box height="150px">
          <Image src={useColorModeValue(logo16, logw10)} />
        </Box>
        <Box height="150px">
          <Image src={logo17} />
        </Box>
        <Box height="150px">
          <Image src={logo18} />
        </Box>
        <Box height="150px">
          <Image src={logo19} />
        </Box>

        {/*  */}
      </SimpleGrid>
    </>
  );
};

export default Logos;
