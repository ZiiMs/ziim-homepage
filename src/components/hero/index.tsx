import { Link as LinkTypes } from '@/types/link';
import {
  Stack,
  VStack,
  Text,
  Heading,
  Link,
  Button,
  Icon,
  PopoverTrigger,
  Popover,
  PopoverContent,
  useColorModeValue,
  PopoverBody,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { GITHUB_PROFILE, STACKOVERFLOW_PROFILE } from 'src/constants';
import HeroImage from './image';

import { FiArrowUpRight } from 'react-icons/fi';
import { HiClipboardList } from 'react-icons/hi';
import { FaDiscord, FaStackOverflow, FaGithub } from 'react-icons/fa';
import EmbededLink from '../EmbedLink';
import { IconType } from 'react-icons';
import { GetStaticProps } from 'next';

const Hero = () => {
  const [openPopver, setOpenPopover] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  type LinkType = LinkTypes & { color?: string; icon: IconType };
  const links: LinkType[] = [
    {
      href: GITHUB_PROFILE,
      label: 'Github',
      icon: FaGithub,
    },
    {
      href: STACKOVERFLOW_PROFILE,
      label: 'Stack Overflow',
      color: 'orange.400',
      icon: FaStackOverflow,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenPopover(false);
    }, 2500);
    return () => {
      clearTimeout(timer);
    };
  }, [openPopver]);

  const discordClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenPopover(true);
    const discordId = 'ZiiM#8109';
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(discordId);
    } else {
      document.execCommand('copy', true, discordId);
    }
  };

  return (
    <Stack
      alignItems='center'
      direction={{ base: 'column-reverse', md: 'row' }}
      w='full'
      spacing={12}
    >
      <VStack w='full' spacing={3}>
        <Heading size='lg' alignSelf='flex-start'>
          Hi, I&#39;m Alexander Tedesco
        </Heading>
        <Text alignSelf='flex-start'>
          I&#39;m a full-stack engineer and a designer. I&#39;m fully self
          tought. Everything I know, I learned on my own. I usually work with{' '}
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
          for front end. I also enjoy working with other languages such as{' '}
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
          . Currently I only do this for a hobby, though if you want any work
          from me, feel free to contact me.
        </Text>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          alignItems='center'
          spacing={3}
        >
          {links.map(({ href, label, color, icon }) => (
            <Button
              key={href}
              as={Link}
              href={href}
              color={color}
              target='_blank'
              isExternal
              variant='ghost'
              rightIcon={<Icon as={FiArrowUpRight} />}
              leftIcon={<Icon as={icon} />}
            >
              {label}
            </Button>
          ))}
          <Popover
            placement='end'
            initialFocusRef={buttonRef}
            size='sm'
            preventOverflow={false}
            isOpen={openPopver}
          >
            <PopoverTrigger>
              <Button
                color='discord'
                ref={buttonRef}
                variant='ghost'
                leftIcon={<Icon as={FaDiscord} />}
                rightIcon={<Icon as={HiClipboardList} />}
                onClick={discordClick}
              >
                ZiiM#8109
              </Button>
            </PopoverTrigger>
            <PopoverContent
              w='fit-content'
              bgColor={useColorModeValue('discord', 'discord')}
              ringColor='transparent'
              color='white'
            >
              <PopoverBody>Copied</PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>
      </VStack>
      <HeroImage />
    </Stack>
  );
};

export default Hero;
