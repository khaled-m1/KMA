
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import smallImage from '../Img/navlogo.PNG';
import WhiteLogo from '../Img/White.png';
import MainLogo from '../Img/Black.png';
import ReactGA from 'react-ga';
ReactGA.initialize('G-180QLRF8NM');

export default function Nav() {
  const trackClick = (appName) => {
    console.log(`Tracking click: ${appName}`);
    ReactGA.event({
      category: 'User',
      action: `Clicked on ${appName}`
    });
  };
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box onClick={() => trackClick('Clicked MainLOGO')}>
            <Image
              width={['14vw', '5vw']}
              src={useColorModeValue(MainLogo, WhiteLogo)}
              alt="LOGO"
            />
          </Box>

          <Flex alignItems={'center'} >
            <Stack direction={'row'} spacing={7} onClick={() => trackClick('Clicked COLOR MOD SUN/MON')}>
              <Button onClick={toggleColorMode} >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu >
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar size={'sm'} src={smallImage} />
                </MenuButton>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
