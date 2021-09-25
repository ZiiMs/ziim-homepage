import { AspectRatio, Box, Spinner } from '@chakra-ui/react';
import React from 'react';
import Image from '../image';

const HeroImage = () => {
  return (
    <AspectRatio flexShrink={0} ratio={1} w={56} h={56}>
      <Box>
        <Image
          src={'/assets/images/AlexTedesco.png'}
          alt='ZiiM'
          layout='fill'
        />
      </Box>
    </AspectRatio>
  );
};

export default HeroImage;
