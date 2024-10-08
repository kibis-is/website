import { Box, Heading, HStack } from '@chakra-ui/react';
import { type FC, type PropsWithChildren } from 'react';

// constants
import { DEFAULT_GAP } from '@site/src/constants';

// hooks
import useDefaultTextColor from '@site/src/hooks/useDefaultTextColor';
import usePrimaryColor from '@site/src/hooks/usePrimaryColor';

const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
  // hooks
  const defaultTextColor = useDefaultTextColor();
  const primaryColor = usePrimaryColor();

  return (
    <HStack
      align="center"
      h={DEFAULT_GAP * 2}
      spacing={DEFAULT_GAP - 2}
      w="full"
    >
      {/*line*/}
      <Box bgColor={primaryColor} borderRadius="full" h="full" w={1.5} />

      {/*title*/}
      <Heading color={defaultTextColor} fontSize="3xl" m={0} p={0}>
        {children}
      </Heading>
    </HStack>
  );
};

export default SectionTitle;
