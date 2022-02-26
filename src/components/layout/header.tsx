import {
  Button,
  IconButton,
  HStack,
  Heading,
  Spacer,
  useColorMode,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { IoMoon, IoSunny } from 'react-icons/io5';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack as='nav' justifyContent='space-between' alignItems='center' py={2}>
      <NextLink href='/' passHref>
        <Link>
          <Heading size='sm' alignItems='flex-start'>
            Alexander
          </Heading>
        </Link>
      </NextLink>
      <HStack alignItems='center' spacing={{ base: 0, md: 2 }}>
        {/* <NextLink href='/projects' passHref>
          <Button as={Link} size='sm' variant='ghost'>
            Projects
          </Button>
        </NextLink> */}
        {/* <NextLink href='/bookmarks' passHref>
          <Button as={Link} size='sm' variant='ghost'>
            Bookmarks
          </Button>
        </NextLink> */}

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
