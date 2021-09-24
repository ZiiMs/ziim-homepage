import Hero from '@/components/hero';
import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <VStack w='full'>
      <Hero />
    </VStack>
  );
};

export default Home;
