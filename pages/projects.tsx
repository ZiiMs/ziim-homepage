import ProjectPost from '@/components/projectpost';
import { Project } from '@/types/project';
import { readFile } from '@/utils/readfile';
import { VStack, Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <>
      <Head>
        <title>Alexander Tedesco - Projects</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <VStack w='full' spacing={20}>
        <VStack alignItems='flex-start' w='full' spacing={2}>
          <Heading size='md'>Projects.</Heading>
          <Text>
            This is a list of some of the projects I’m working on or have
            finished.
          </Text>
        </VStack>
        <VStack spacing={5} alignItems='flex-start'>
          {projects.map((project) => (
            <ProjectPost key={project.url} {...project} />
          ))}
        </VStack>
      </VStack>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { projects } = await readFile<{ projects: Project[] }>(
    'data/projects.json'
  );

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
