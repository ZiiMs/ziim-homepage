import { Project } from '@/types/project';
import {
  AspectRatio,
  Heading,
  LinkBox,
  VStack,
  Text,
  useColorModeValue,
  LinkOverlay,
} from '@chakra-ui/react';
import React from 'react';
import Image from '../image';

type Props = Project;

const ProjectCard = ({ title, description, url, image }: Props) => {
  return (
    <LinkBox>
      <VStack spacing={4} alignItems='flex-start'>
        <AspectRatio ratio={16 / 9} w='full'>
          <Image src={image} alt={title} rounded='lg' layout='fill' />
        </AspectRatio>
        <VStack spacing={1.5}>
          <LinkOverlay href={url} target='_blank' isExternal>
            <Heading fontSize='md'>{title}</Heading>
          </LinkOverlay>
          <Text fontSize='sm' color={useColorModeValue('gray.500', 'gray.400')}>
            {description}
          </Text>
        </VStack>
      </VStack>
    </LinkBox>
  );
};
export default ProjectCard;
