import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  components: {
    Heading: {
      baseStyle: (props: any) => ({
        color: mode('gray.700', 'white')(props),
      }),
    },
    Text: {
      baseStyle: (props: any) => ({
        color: mode('gray.700', 'white')(props),
      }),
    },
  },
  fonts: {
    heading: `Poppins, ${base.fonts.heading}`,
    body: `Inter, ${base.fonts.body}`,
  },
});

export default theme;
