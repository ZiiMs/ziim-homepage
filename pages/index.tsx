import Hero from '@/components/hero';
import { VStack } from '@chakra-ui/react';
import type { GetStaticProps } from 'next';
import React from 'react';
import Head from 'next/head';
import Projects from '@/components/favProjects';
import { Project } from '@/types/project';
import { readFile } from '@/utils/readfile';

type Props = {
  projects: Project[];
};

const Home = ({ projects }: Props) => {
  return (
    <>
      <Head>
        <title>Alexander Tedesco - Home</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <VStack w='full' spacing={20}>
        <Hero />
        <Projects projects={projects} />
      </VStack>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { projects } = await readFile<{ projects: Project[] }>(
    'data/favorite-projects.json'
  );

  return {
    props: {
      projects,
    },
  };
};

export default Home;
