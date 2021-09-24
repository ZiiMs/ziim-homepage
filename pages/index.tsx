import Hero from '@/components/hero';
import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alexander Tedesco - Home</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <VStack w='full'>
        <Hero />
      </VStack>
    </>
  );
};

export default Home;
