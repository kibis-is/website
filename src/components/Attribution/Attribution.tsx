import { Box } from '@chakra-ui/react';
import { cloneElement, FC } from 'react';

// types
import type { IProps } from './types';

const Attribution: FC<IProps> = ({ children }) => {
  return (
    <Box bg="black" p={1}>
      {cloneElement(children, {
        color: 'whiteAlpha.800',
        fontSize: 'xs',
        lineHeight: '1rem',
        m: 0,
        p: 0,
      })}
    </Box>
  );
};

export default Attribution;
