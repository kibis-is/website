import { VStack } from '@chakra-ui/react';
import { type FC, type PropsWithChildren } from 'react';

// components
import SectionTitle from '@site/src/components/SectionTitle';

// constants
import { DEFAULT_GAP } from '@site/src/constants';

// types
import type { IProps } from './types';

const Section: FC<IProps & PropsWithChildren> = ({
  children,
  id,
  title,
  variant = 'primary',
}) => {
  return (
    <VStack
      as="section"
      bgColor={
        variant === 'accent'
          ? 'var(--kb-background-accent-color)'
          : 'var(--kb-background-primary-color)'
      }
      px={DEFAULT_GAP}
      py={20}
      id={id}
      spacing={DEFAULT_GAP}
      w="full"
    >
      {/*title*/}
      <SectionTitle>{title}</SectionTitle>

      {/*content*/}
      <VStack w="full">{children}</VStack>
    </VStack>
  );
};

export default Section;
