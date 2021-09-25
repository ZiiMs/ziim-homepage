import Hero from '@/components/hero';
import { VStack } from '@chakra-ui/react';
import type { GetStaticProps } from 'next';
import React from 'react';
import Head from 'next/head';
import Projects from '@/components/projects';
import { Project } from '@/types/project';
import path from 'path';
import { promises as fs } from 'fs';

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
  const jsonPath = path.join(process.cwd(), 'data/projects.json');
  const fileContent = await fs.readFile(jsonPath, 'utf8');
  const jsonParse = JSON.parse(fileContent) as { projects: Project[] };
  const projects = jsonParse.projects;

  return {
    props: {
      projects,
    },
  };
};

export default Home;
