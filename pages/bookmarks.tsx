import BookmarkCard from '@/components/bookmarkcard';
import { Bookmark } from '@/types/bookmark';
import { readFile } from '@/utils/readfile';
import { VStack, Text, Heading, HStack } from '@chakra-ui/layout';
import { Tag, useColorModeValue } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

type Props = {
  bookmarks: Bookmark[];
};

const Bookmarks = ({ bookmarks }: Props) => {
  const [isSelected, setIsSelected] = useState([
    'General',
    'Design',
    'Developer',
  ]);
  const [sortedBookmarks, setSortedBookmakrs] = useState(bookmarks);
  const GetColor = (type: string, tag: string, colormode: string) => {
    switch (type) {
      case 'bg': {
        if (tag === 'General') {
          if (isSelected.includes('General')) {
            if (colormode === 'light') {
              return 'blue.500';
            } else {
              return 'blue.600';
            }
          } else {
            if (colormode === 'light') {
              return 'blue.100';
            } else {
              return 'blue.200';
            }
          }
        } else if (tag === 'Developer') {
          if (isSelected.includes('Developer')) {
            if (colormode === 'light') {
              return 'purple.500';
            } else {
              return 'purple.600';
            }
          } else {
            if (colormode === 'light') {
              return 'purple.100';
            } else {
              return 'purple.200';
            }
          }
        } else if (tag === 'Design') {
          if (isSelected.includes('Design')) {
            if (colormode === 'light') {
              return 'green.500';
            } else {
              return 'green.600';
            }
          } else {
            if (colormode === 'light') {
              return 'green.100';
            } else {
              return 'green.200';
            }
          }
        }
      }
      default: {
        if (tag === 'General') {
          if (isSelected.includes('General')) {
            return 'white';
          } else {
            if (colormode === 'light') {
              return 'blue.500';
            } else {
              return 'blue.600';
            }
          }
        } else if (tag === 'Developer') {
          if (isSelected.includes('Developer')) {
            return 'white';
          } else {
            if (colormode === 'light') {
              return 'purple.500';
            } else {
              return 'purple.600';
            }
          }
        } else if (tag === 'Design') {
          if (isSelected.includes('Design')) {
            return 'white';
          } else {
            if (colormode === 'light') {
              return 'green.500';
            } else {
              return 'green.600';
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    setSortedBookmakrs(
      bookmarks.filter((ele) => {
        if (isSelected.includes('General')) {
          if (ele.tag == 'General') return ele;
        }
        if (isSelected.includes('Design')) {
          if (ele.tag == 'Design') return ele;
        }
        if (isSelected.includes('Developer')) {
          if (ele.tag == 'Developer') return ele;
        }
      })
    );
  }, [isSelected]);

  type Tag = {
    tag: string;
    bgColor?: string;
    textColor?: string;
  };

  const tags: Tag[] = [
    {
      tag: 'General',
      bgColor: useColorModeValue(
        GetColor('bg', 'General', 'light'),
        GetColor('bg', 'General', 'dark')
      ),
      textColor: useColorModeValue(
        GetColor('text', 'General', 'light'),
        GetColor('text', 'General', 'dark')
      ),
    },
    {
      tag: 'Design',
      bgColor: useColorModeValue(
        GetColor('bg', 'Design', 'light'),
        GetColor('bg', 'Design', 'dark')
      ),
      textColor: useColorModeValue(
        GetColor('text', 'Design', 'light'),
        GetColor('text', 'Design', 'dark')
      ),
    },
    {
      tag: 'Developer',
      bgColor: useColorModeValue(
        GetColor('bg', 'Developer', 'light'),
        GetColor('bg', 'Developer', 'dark')
      ),
      textColor: useColorModeValue(
        GetColor('text', 'Developer', 'light'),
        GetColor('text', 'Developer', 'dark')
      ),
    },
  ];

  const tagClick = (tag: string) => {
    if (isSelected.includes(tag)) {
      const tempSelected = isSelected.filter((ele) => {
        return ele != tag;
      });
      setIsSelected(tempSelected);
    } else {
      setIsSelected((prev) => [...prev, tag]);
    }
  };

  return (
    <>
      <Head>
        <title>Alexander Tedesco - Bookmarks</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <VStack w='full' spacing={20}>
        <VStack alignItems='flex-start' w='full' spacing={2}>
          <Heading size='md'>Bookmarks.</Heading>
          <Text>
            This is a list of some of the bookmarks I’m working on or have
            finished.
          </Text>
        </VStack>

        <VStack spacing={5} alignItems='flex-start'>
          <HStack alignItems='flex-start' w='full' spacing={2.5}>
            {tags.map(({ tag, bgColor, textColor }) => (
              <Tag
                key={tag}
                as='button'
                rounded='xl'
                size='md'
                bgColor={bgColor}
                textColor={textColor}
                onClick={() => tagClick(tag)}
              >
                {tag}
              </Tag>
            ))}
          </HStack>
          {sortedBookmarks.map((bookmark, i) => (
            <BookmarkCard key={i} {...bookmark} />
          ))}
        </VStack>
      </VStack>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { bookmarks } = await readFile<{ bookmarks: Bookmark[] }>(
    'data/bookmarks.json'
  );

  return {
    props: {
      bookmarks,
    },
  };
};

export default Bookmarks;
