import { Project } from '@/types/project';
import { GridItem, Heading, SimpleGrid, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from '../projectCard';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <VStack spacing={4} w='full' alignItems='flex-start'>
      <Heading size='md'>Favorite Projects.</Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={7}
        w='full'
        columnGap={12}
        rowGap={8}
      >
        {projects.map((project) => (
          <GridItem key={project.url}>
            <ProjectCard {...project} />
          </GridItem>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Projects;
