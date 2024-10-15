import type { TextProps } from '@chakra-ui/react';
import type { ReactElement } from 'react';

interface IProps {
  altID: string;
  attribution?: ReactElement<TextProps>;
  descriptionIDs: string[];
  src: string;
  titleID: string;
}

export default IProps;
