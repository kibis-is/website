import { Heading, VStack } from '@chakra-ui/react';
import type { FC } from 'react';

// components
import LinkButton from '@site/src/components/LinkButton';

// constants
import { DEFAULT_GAP } from '@site/src/constants';

// hooks
import useDefaultTextColor from '@site/src/hooks/useDefaultTextColor';

// styles
import styles from './styles.module.scss';

// types
import type { IProps } from './types';

const WebDownloadItem: FC<IProps> = ({
  buttonLabel,
  downloadUri,
  name,
  SvgComponent,
}) => {
  // hooks
  const defaultTextColor = useDefaultTextColor();

  return (
    <VStack gap={DEFAULT_GAP / 3} w="full">
      {/*image*/}
      <div className={styles['image-container']}>
        <SvgComponent className={styles.image} role="img" />
      </div>

      {/*name*/}
      <Heading fontSize="lg" color={defaultTextColor} w="full">
        {name}
      </Heading>

      {/*button*/}
      <LinkButton
        href={downloadUri}
        isDisabled={!downloadUri}
        isExternal={!!downloadUri}
        size="lg"
        variant="solid"
        w="full"
      >
        {buttonLabel ? buttonLabel : downloadUri ? 'Install' : 'Coming Soon!'}
      </LinkButton>
    </VStack>
  );
};

export default WebDownloadItem;
