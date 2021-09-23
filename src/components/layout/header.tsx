import {
  Button,
  IconButton,
  HStack,
  Heading,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      as='nav'
      justifyContent='space-between'
      alignItems='center'
      py={2}
      px={6}
    >
      <Heading size='sm' alignItems='flex-start'>
        Alexander
      </Heading>
      <Spacer />
      <HStack spacing={6}>
        <Button size='sm' variant='ghost'>
          Projects
        </Button>
        <Button size='sm' variant='ghost'>
          Bookmarks
        </Button>
        <IconButton
          size='sm'
          variant='ghost'
          aria-label='toggle theme'
          icon={colorMode == 'light' ? <IoMoon /> : <IoSunny />}
          onClick={toggleColorMode}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
