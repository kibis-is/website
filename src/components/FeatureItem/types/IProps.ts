import type { TextProps } from '@chakra-ui/react';
import type { ReactElement } from 'react';

interface IProps {
  alt: string;
  attribution?: ReactElement<TextProps>;
  description: string[];
  src: string;
  title: string;
}

export default IProps;
