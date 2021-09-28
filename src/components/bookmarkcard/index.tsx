import {
  AspectRatio,
  Box,
  Divider,
  Heading,
  Text,
  LinkOverlay,
  Stack,
  Tag,
  useColorModeValue,
  VStack,
  LinkBox,
} from '@chakra-ui/react';
import Image from '../image';
import React from 'react';
import { Bookmark } from '@/types/bookmark';

type Props = Bookmark;

const BookmarkCard = ({ description, image, tag, title, url }: Props) => {
  let colorScheme = 'green.500';

  const getColor = () => {
    switch (tag) {
      case 'Developer':
        return 'purple.500';
      case 'General':
        return 'blue.500';
      case 'Design':
        return 'green.500';
    }
  };

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
          <AspectRatio w={235} h={180} ratio={16 / 9} flexShrink={0}>
            <Box>
              <Image src={image} alt={title} rounded='lg' layout='fill' />
            </Box>
          </AspectRatio>
          <VStack spacing={3} alignItems='flex-start' w='full'>
            <VStack spacing={2} alignItems='flex-start' w='full'>
              <LinkOverlay href={url} target='_blank'>
                <Heading fontSize='3xl'>{title}</Heading>
              </LinkOverlay>
              <Tag
                rounded='xl'
                size='md'
                bgColor={getColor()}
                textColor='white'
              >
                {tag}
              </Tag>
            </VStack>
            <Text>{description}</Text>
          </VStack>
        </Stack>
        <Divider borderColor={useColorModeValue('gray.400', 'gray.600')} />
      </VStack>
    </LinkBox>
  );
};

export default BookmarkCard;
