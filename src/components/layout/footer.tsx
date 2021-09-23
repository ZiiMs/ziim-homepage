import {
  Flex,
  Text,
  VStack,
  Divider,
  Stack,
  Link,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { GITHUB_PROFILE, STACKOVERFLOW_PROFILE } from '../../constants';
import { Link as LinkType } from '@/types/link';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const leftSide: LinkType[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/bookmarks',
    label: 'Bookmarks',
  },
];

const middleGroup: LinkType[] = [
  {
    href: GITHUB_PROFILE,
    label: 'Github',
  },
  {
    href: STACKOVERFLOW_PROFILE,
    label: 'Stack Overflow',
  },
  {
    href: '/discord',
    label: 'Discord',
  },
];

const rightSide: LinkType[] = [
  {
    href: '/software',
    label: 'Software',
  },
  {
    href: '/hardware',
    label: 'Hardware',
  },
];

const Footer = () => {
  const { pathname } = useRouter();

  return (
    <VStack pb={3} spacing={5}>
      <Divider />
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent='space-between'
        w='full'
        spacing={5}
      >
        <VStack alignItems='flex-start'>
          {leftSide.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link color={pathname === href ? 'purple.500' : 'gray.500'}>
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
        <VStack alignItems='flex-start'>
          {middleGroup.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link
                color={pathname === href ? 'purple.500' : 'gray.500'}
                target='_blank'
                isExternal
              >
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
        <VStack alignItems='flex-start'>
          {rightSide.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link color={pathname === href ? 'purple.500' : 'gray.500'}>
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
      </Stack>
      <HStack justifyContent='flex-start' w='full' spacing={1}>
        <Text size='sm' color='gray.500'>
          ©
        </Text>
        <Text color='purple.500'>2021</Text>
        <Text size='sm' color='gray.500'>
          Alexander Tedesco
        </Text>
      </HStack>
    </VStack>
  );
};

export default Footer;
