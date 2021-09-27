import { Project } from '@/types/project';
import {
  Heading,
  HStack,
  VStack,
  Text,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
  Divider,
  AspectRatio,
  Box,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import Image from '../image';

type Props = Project;

const ProjectPost = ({ description, title, url, date, image }: Props) => {
  const color = useColorModeValue('gray.500', 'gray.600');
  const brdColor = useColorModeValue('gray.400', 'gray.600');
  if (image == null) {
    return (
      <LinkBox>
        <VStack spacing={3} alignItems='flex-start' w='full'>
          <HStack justifyContent='space-between' w='full'>
            <LinkOverlay href={url} target='_blank'>
              <Heading fontSize='md'>{title}</Heading>
            </LinkOverlay>
            <Text color={color}>{date}</Text>
          </HStack>
          <Text>{description}</Text>
          <Divider borderColor={brdColor} />
        </VStack>
      </LinkBox>
    );
  } else {
    return (
      <LinkBox>
        <VStack spacing={3} alignItems='flex-start' w='full'>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={3}
            alignItems='center'
            w='full'
            maxW='full'
          >
            <AspectRatio w={260} h='full' ratio={16 / 9} flexShrink={0}>
              <Box>
                <Image src={image} alt={title} rounded='lg' layout='fill' />
              </Box>
            </AspectRatio>
            <VStack spacing={3} alignItems='flex-start' w='full'>
              <HStack justifyContent='space-between' w='full'>
                <LinkOverlay href={url} target='_blank'>
                  <Heading fontSize='md'>{title}</Heading>
                </LinkOverlay>
                <Text color={color}>{date}</Text>
              </HStack>
              <Text>{description}</Text>
            </VStack>
          </Stack>
          <Divider borderColor={brdColor} />
        </VStack>
      </LinkBox>
    );
  }
};

export default ProjectPost;
