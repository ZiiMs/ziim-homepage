import { Icon, Link, LinkProps, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const EmbededLink = ({ children, ...props }: LinkProps) => {
  return (
    <span>
      <Link
        {...props}
        color={useColorModeValue('purple.500', 'purple.300')}
        alignItems='center'
        display='inline-flex'
        isExternal
        target='_blank'
      >
        {children}
        <Icon
          as={FiArrowUpRight}
          color={useColorModeValue('gray.700', 'white')}
          display='inline'
        />
      </Link>
    </span>
  );
};

export default EmbededLink;
