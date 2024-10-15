import { Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { translate } from '@docusaurus/Translate';
import { type FC } from 'react';

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
  altID,
  descriptionIDs,
  src,
  titleID,
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
      justify={desktopAndUp ? 'space-evenly' : 'center'}
      spacing={DEFAULT_GAP - 2}
      w="full"
    >
      <VStack maxW="400px" spacing={DEFAULT_GAP / 3} w="full">
        {/*image*/}
        <Image alt={translate({ id: altID })} src={src} w="full" />

        {/*attribution*/}
        {attribution && (
          <Stack align="flex-start" justify="center" w="full">
            <Attribution>{attribution}</Attribution>
          </Stack>
        )}
      </VStack>

      <VStack spacing={1} w={desktopAndUp ? '45%' : '75%'}>
        {/*title*/}
        <Heading color={defaultTextColor} textAlign={textAlign} w="full">
          {translate({ id: titleID })}
        </Heading>

        {/*descriptions*/}
        {descriptionIDs.map((value) => (
          <Text
            color={defaultTextColor}
            key={value.replace(' ', '_')}
            textAlign={textAlign}
            w="full"
          >
            {translate({ id: value })}
          </Text>
        ))}
      </VStack>
    </Stack>
  );
};

export default FeatureItem;
