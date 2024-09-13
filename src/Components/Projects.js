import React from 'react';
import {
  Box,
  Image,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import p1 from '../Img/Projects/p1.png';
import p2 from '../Img/Projects/p2.png';
import p3 from '../Img/Projects/p3.png';
import p4 from '../Img/Projects/p4.png';
import p5 from '../Img/Projects/p5.png';
import p6 from '../Img/Projects/p6.png';
import p7 from '../Img/Projects/p7.png';
import p8 from '../Img/Projects/p8.png';
import p9 from '../Img/Projects/p9.png';
import p10 from '../Img/Projects/p10.png';

import p11 from '../Img/Projects/p11.png';
import p12 from '../Img/Projects/p12.png';
import p13 from '../Img/Projects/p13.png';
import p14 from '../Img/Projects/p14.png';
import p15 from '../Img/Projects/p15.png';
import p16 from '../Img/Projects/p16.png';

import ReactGA from 'react-ga';
ReactGA.initialize('G-180QLRF8NM');

const Projects = () => {
  const trackClick = (appName) => {
    console.log(`Tracking click: ${appName}`);
    ReactGA.event({
      category: 'User',
      action: `Clicked on ${appName}`
    });
  };

  return (
    <>
      <SimpleGrid columns={2} spacing={1}>
        <Box height={['200px', '300px']}>
          <Link
            href="https://khaled-m1.github.io/tabayan-api-1.2/"
            onClick={() => trackClick('Clicked Project1')}
          >
            <Image src={p1} />
          </Link>
        </Box>
        <Box height={['200px', '300px']}>
          <Link
            href="https://peaceful-dusk-21d910.netlify.app/
"
onClick={() => trackClick('Clicked Project2')}
          >
            <Image src={p2} />
          </Link>
        </Box>
        <Box height={['200px', '300px']}>
          <Link href="https://mirrorvana.netlify.app"  onClick={() => trackClick('Clicked Project3')}>
            <Image src={p3} />
          </Link>
        </Box>
        <Box height={['200px', '300px']}>
          <Link href="https://rococo-gaufre-9c482c.netlify.app/"  onClick={() => trackClick('Clicked Project4')}>
            <Image src={p4} />
          </Link>
        </Box>
        <Box height={['200px', '300px']}>
          <Link href="https://lens.sa/"  onClick={() => trackClick('Clicked Project5')}>
            <Image src={p5} />
          </Link>
        </Box>
        <Box height={['200px', '300px']}>
          <Link href="http://prowolves.com/"  onClick={() => trackClick('Clicked Project6')}>
            <Image src={p6} />
          </Link>
        </Box>
        <Box height={['200px', '300px']}>
          <Link href="https://ans-cam.com/"  onClick={() => trackClick('Clicked Project6')}>
            <Image src={p7} />
          </Link>
        </Box>
        <Box height={['200px', '300px']}>
          <Link href="https://tarjim.netlify.app/"  onClick={() => trackClick('Clicked Project7')}>
            <Image src={p8} />
          </Link>
        </Box>
        <Box height={['160px', '245px']}>
          <Link href="http://ahmadrodain.com/"  onClick={() => trackClick('Clicked Project8')}>
            <Image src={p9} />
          </Link>
        </Box>
        <Box height={['160px', '245px']}>
          <Link  onClick={() => trackClick('Clicked Project9')}>
            <Image src={p10} />
          </Link>
        </Box>

        <Box height={['160px', '245px']}>
          <Link  onClick={() => trackClick('Clicked Project10')}>
            <Image src={p11} />
          </Link>
        </Box>
        <Box height={['160px', '245px']}>
          <Link href="https://m-alnamr.com/"  onClick={() => trackClick('Clicked Project11')}>
            <Image src={p12} />
          </Link>
        </Box>
        <Box height={['160px', '245px']}>
          <Link href="http://baligh-alzamar.com/" onClick={() => trackClick('Clicked Project12')}>
            <Image src={p13} />
          </Link>
        </Box>
        <Box height={['160px', '245px']}>
          <Link onClick={() => trackClick('Clicked Project13')}>
            <Image src={p14} />
          </Link>
        </Box>
        <Box height={['160px', '245px']}>
          <Link
            href="http://eab.sa/
"
onClick={() => trackClick('Clicked Project14')}
          >
            <Image src={p15} />
          </Link>
        </Box>
        <Box height={['160px', '245px']}>
          <Link onClick={() => trackClick('Clicked Project15')}>
            <Image src={p16} />
          </Link>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Projects;
