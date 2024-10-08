import { Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React, { type FC } from 'react';

// components
import Attribution from '@site/src/components/Attribution';

// constants
import { DEFAULT_GAP } from '@site/src/constants';

// hooks
import useDefaultTextColor from '@site/src/hooks/useDefaultTextColor';
import useDesktopAndUp from '@site/src/hooks/useDesktopAndUp';

// types
import type { IProps } from './types';

const FeatureItem: FC<IProps> = ({
  attribution,
  alt,
  description,
  src,
  title,
}) => {
  // hooks
  const defaultTextColor = useDefaultTextColor();
  const desktopAndUp = useDesktopAndUp();
  // misc
  const textAlign = desktopAndUp ? 'left' : 'center';

  return (
    <Stack
      align="center"
      direction={desktopAndUp ? 'row' : 'column'}
      justify={desktopAndUp ? 'flex-start' : 'center'}
      p={DEFAULT_GAP * 2}
      spacing={DEFAULT_GAP}
      w="full"
    >
      <Stack position="relative">
        {/*image*/}
        <Image
          alt={alt}
          src={src}
          w={96}
          {...(desktopAndUp && {
            mr: DEFAULT_GAP * 4,
          })}
        />

        {/*attribution*/}
        {attribution && (
          <Stack
            align="flex-end"
            bottom={0}
            justify="center"
            position="absolute"
            right={0}
            w="full"
          >
            <Attribution>{attribution}</Attribution>
          </Stack>
        )}
      </Stack>

      {/*title/description*/}
      <VStack spacing={1} w={desktopAndUp ? '55%' : 'full'}>
        <Heading
          color={defaultTextColor}
          fontSize="2xl"
          textAlign={textAlign}
          w="full"
        >
          {title}
        </Heading>

        <Text
          color={defaultTextColor}
          fontSize="lg"
          textAlign={textAlign}
          w="full"
        >
          {description}
        </Text>
      </VStack>
    </Stack>
  );
};

export default FeatureItem;
