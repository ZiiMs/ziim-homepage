import { Link as LinkTypes } from '@/types/link';
import {
  Stack,
  VStack,
  Text,
  Heading,
  Link,
  Button,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import { GITHUB_PROFILE, STACKOVERFLOW_PROFILE } from 'src/constants';
import HeroImage from './image';

import { FiArrowUpRight } from 'react-icons/fi';
import EmbededLink from '../EmbedLink';

const Hero = () => {
  type LinkType = LinkTypes & { color?: string };
  const links: LinkType[] = [
    {
      href: GITHUB_PROFILE,
      label: 'Github',
    },
    {
      href: STACKOVERFLOW_PROFILE,
      label: 'Stack Overflow',
      color: 'orange.400',
    },
  ];

  return (
    <Stack
      alignItems='center'
      direction={{ base: 'column-reverse', md: 'row' }}
      w='full'
      spacing={12}
    >
      <VStack w='full' alignItems='flex-start' spacing={3}>
        <Heading size='lg'>Hi, I’m Alexander Tedesco</Heading>
        <Text>
          I’m a full-stack engineer and a designer. I am fully self tought,
          everything I know I learned on my own. I usually work with{' '}
          <EmbededLink href='https://reactjs.org/'>
            <strong>ReactJS</strong>
          </EmbededLink>
          /
          <EmbededLink href='https://nextjs.org/'>
            <strong>NextJS</strong>
          </EmbededLink>{' '}
          and{' '}
          <EmbededLink href='https://chakra-ui.com/'>
            <strong>Chakra UI</strong>
          </EmbededLink>{' '}
          for front end. I have work with other languages such as{' '}
          <EmbededLink href='https://www.oracle.com/java/'>
            <strong>Java</strong>
          </EmbededLink>
          ,{' '}
          <EmbededLink href='https://www.lua.org/'>
            <strong>lua</strong>
          </EmbededLink>{' '}
          and a tiny bit of{' '}
          <EmbededLink href='https://dotnet.microsoft.com/languages/csharp'>
            <strong>C#</strong>
          </EmbededLink>
          . Currently I only do this for a hobby. Though if you want any work
          from me, feel free to contact me.
        </Text>

        <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
          {links.map(({ href, label, color }) => (
            <Button
              as={Link}
              href={href}
              color={color}
              target='_blank'
              isExternal
              variant='ghost'
              rightIcon={<Icon as={FiArrowUpRight} />}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </VStack>
      <HeroImage />
    </Stack>
  );
};

export default Hero;
