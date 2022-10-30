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

const Projects = () => {
  return (
    <>
      <SimpleGrid columns={2} spacing={1}>
        <Box height={['200px', '300px']}>
          <Link
            href="https://khaled-m1.github.io/tabayan-api-1.2/
"
            
          >
            <Image src={p1} />
          </Link>
        </Box>
        <Box height={['200px', '300px']}>
          <Link
            href="https://peaceful-dusk-21d910.netlify.app/
"
             
          >
            <Image src={p2} />
          </Link>
        </Box>
        <Box height={['200px', '300px']}>
          <Link href="https://mirrorvana.netlify.app"  >
            <Image src={p3} />
          </Link>
        </Box>
        <Box height={['200px', '300px']}>
          <Link href="https://rococo-gaufre-9c482c.netlify.app/"  >
            <Image src={p4} />
          </Link>
        </Box>
        <Box height={['200px', '300px']}>
          <Link href="https://lens.sa/"  >
            <Image src={p5} />
          </Link>
        </Box>
        <Box height={['200px', '300px']}>
          <Link href="http://prowolves.com/"  >
            <Image src={p6} />
          </Link>
        </Box>
        <Box height={['200px', '300px']}>
          <Link href="https://ans-cam.com/"  >
            <Image src={p7} />
          </Link>
        </Box>
        <Box height={['200px', '300px']}>
          <Link href="https://tarjim.netlify.app/"  >
            <Image src={p8} />
          </Link>
        </Box>
        <Box height={['160px', '245px']}>
          <Link href="http://ahmadrodain.com/"  >
            <Image src={p9} />
          </Link>
        </Box>
        <Box height={['160px', '245px']}>
          <Link  >
            <Image src={p10} />
          </Link>
        </Box>

        <Box height={['160px', '245px']}>
          <Link  >
            <Image src={p11} />
          </Link>
        </Box>
        <Box height={['160px', '245px']}>
          <Link href="https://m-alnamr.com/"  >
            <Image src={p12} />
          </Link>
        </Box>
        <Box height={['160px', '245px']}>
          <Link href="http://baligh-alzamar.com/" >
            <Image src={p13} />
          </Link>
        </Box>
        <Box height={['160px', '245px']}>
          <Link >
            <Image src={p14} />
          </Link>
        </Box>
        <Box height={['160px', '245px']}>
          <Link
            href="http://eab.sa/
"
            
          >
            <Image src={p15} />
          </Link>
        </Box>
        <Box height={['160px', '245px']}>
          <Link >
            <Image src={p16} />
          </Link>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Projects;
