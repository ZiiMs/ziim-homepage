import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  colors: {
    discord: '#738adb',
  },
  semanticTokens: {
    colors: {
      text: {
        default: 'gray.700',
        _dark: 'white',
      },
      heading: {
        default: 'gray.700',
        _dark: 'white',
      },
    },
  },

  fonts: {
    heading: `Poppins, ${base.fonts.heading}`,
    body: `Inter, ${base.fonts.body}`,
  },
});

export default theme;

