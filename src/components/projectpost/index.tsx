import { Project } from '@/types/project';
import {
  Heading,
  HStack,
  VStack,
  Text,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from '@chakra-ui/react';

type Props = Project;

const ProjectPost = ({ description, title, url, date }: Props) => {
  return (
    <LinkBox>
      <VStack spacing={3} alignItems='flex-start' w='full'>
        <HStack justifyContent='space-between' w='full'>
          <LinkOverlay href={url} target='_blank'>
            <Heading fontSize='md'>{title}</Heading>
          </LinkOverlay>
          <Text color={useColorModeValue('gray.500', 'gray.600')}>{date}</Text>
        </HStack>
        <Text>{description}</Text>
      </VStack>
    </LinkBox>
  );
};

export default ProjectPost;
