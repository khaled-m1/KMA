import React from 'react';
import {
  Box,
  Image,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import TSP from '../Img/Logos/1.png';
import NOB from '../Img/Logos/2.png';
import LOW from '../Img/Logos/3.png';
import AFLAJ from '../Img/Logos/4.png';
import FIVECOLORS from '../Img/Logos/5.png';
import LENS from '../Img/Logos/6.png';
import EROR from '../Img/Logos/7.png';
import TARJEM from '../Img/Logos/8.png';
import SAUDIGROUP from '../Img/Logos/9.png';
import ALI from '../Img/Logos/10.png';
import DOO from '../Img/Logos/11.png';
import EMCREY from '../Img/Logos/12.png';
import NAFUD from '../Img/Logos/13.png';
import TUDER from '../Img/Logos/14.png';
import RAJB from '../Img/Logos/15.png';
import SAUDIPAYEMNT from '../Img/Logos/16.png';
import BSFB from '../Img/Logos/17.png';
import MASHA from '../Img/Logos/18.png';
import WOLVES from '../Img/Logos/19.png';
import VIBELAB from '../Img/Logos/20.png';
import EDA_app from '../Img/Logos/21.svg'



import ReactGA from 'react-ga';
ReactGA.initialize('G-180QLRF8NM');

const Logos = () => {
  const trackClick = (appName) => {
    console.log(`Tracking click: ${appName}`);
    ReactGA.event({
      category: 'User',
      action: `Clicked on ${appName}`
    });
  };
  return (
    <>
      <SimpleGrid columns={3} spacing={[1, 10]}>
        {/* 1 */}
        <Box height="100px" onClick={() => trackClick('Clicked EMCREY logo')}>
          <Image src={EMCREY} />
        </Box>
        {/* 2 */}
        <Box height="100px" onClick={() => trackClick('Clicked SAUDIPAYEMNT logo')}>
          <Image src={SAUDIPAYEMNT} />
        </Box>
        {/* 3 */}
        <Box height="100px" onClick={() => trackClick('Clicked BSFB logo')}>
          <Image src={BSFB} />
        </Box>
        {/* 4 */}
        <Box height="100px" onClick={() => trackClick('Clicked SAUDIGROUP logo')}>
          <Image src={SAUDIGROUP} />
        </Box>

        {/* 5 */}
        <Box height="100px" onClick={() => trackClick('Clicked RAJB logo')}>
          <Image src={RAJB} />
        </Box>
        {/* 6 */}
        <Box height="100px" onClick={() => trackClick('Clicked TUDER logo')}>
          <Image src={TUDER} />
        </Box>
        {/* 7 */}
        <Box height="100px" onClick={() => trackClick('Clicked DOO logo')}>
          <Image src={DOO} />
        </Box>
        {/* 8 */}
        <Box height="100px" onClick={() => trackClick('Clicked LENS logo')}>
          <Image src={LENS} />
        </Box>


        {/* 9 */}
        <Box height="100px" onClick={() => trackClick('Clicked FIVECOLORS logo')}>
          <Image src={FIVECOLORS} />
        </Box>
        {/* 10 */}
        <Box height="100px" onClick={() => trackClick('Clicked NOB logo')}>
          <Image src={NOB} />
        </Box>
        {/* 11 */}
        <Box height="100px" onClick={() => trackClick('Clicked TSP logo')}>
          <Image src={TSP} />
        </Box>
        {/* 12 */}
        <Box height="100px" onClick={() => trackClick('Clicked MASHA logo')}>
          <Image src={MASHA} />
        </Box>

        {/* 13 */}
        <Box height="100px" onClick={() => trackClick('Clicked NAFUD logo')}>
          <Image src={NAFUD} />
        </Box>
        {/* 14 */}
        <Box height="100px" onClick={() => trackClick('Clicked EROR logo')}>
          <Image src={EROR} />
        </Box>
        {/* 15 */}
        <Box height="100px" onClick={() => trackClick('Clicked LOW logo')}>
          <Image src={LOW} />
        </Box>
        {/* 16 */}
        <Box height="100px" onClick={() => trackClick('Clicked AFLAJ logo')}>
          <Image src={AFLAJ} />
        </Box>

        {/* 17 */}
        <Box height="100px" onClick={() => trackClick('Clicked ALI-20store logo')}>
          <Image src={ALI} />
        </Box>

        {/* 18 */}
        <Box height="100px" onClick={() => trackClick('Clicked WOLVES logo')}>
          <Image src={WOLVES} />
        </Box>
        {/* 19 */}
        <Box height="100px" onClick={() => trackClick('Clicked VIBELAB logo')}>
          <Image src={VIBELAB} />
        </Box>
        {/* 20 */}
        <Box height="100px" onClick={() => trackClick('Clicked TARJEM logo')}>
          <Image src={TARJEM} />
        </Box>
        {/* 21 */}
        <Box height="100px" onClick={() => trackClick('Clicked TARJEM logo')}>
          <Image src={EDA_app} />
        </Box>

        {/*  */}
      </SimpleGrid>
    </>
  );
};

export default Logos;
