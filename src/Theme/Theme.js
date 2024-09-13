import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Tajawal', sans-serif`,
    body: `'Tajawal', sans-serif`,
  },
  fontFallbacks: {
    sansSerif: `'Tajawal', 'Helvetica Neue', Arial, sans-serif`,
  }
});

export default theme;
