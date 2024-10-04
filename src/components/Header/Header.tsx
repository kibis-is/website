import { Heading, Text, VStack } from '@chakra-ui/react';
import type { FC } from 'react';

// components
import LinkButton from '@site/src/components/LinkButton';

// constants
import { DEFAULT_GAP } from '@site/src/constants';

// styles
import styles from './styles.module.scss';

const Header: FC = () => {
  const fontColor = 'whiteAlpha.800';

  return (
    <header className={styles.header__outer}>
      <VStack
        justify="center"
        flexGrow={1}
        maxW="700px"
        spacing={DEFAULT_GAP - 2}
        w="full"
      >
        {/*title*/}
        <Heading color={fontColor} fontSize="5xl" textAlign="center" w="full">
          {`Your Ultimate AVM Utility Wallet`}
        </Heading>

        {/*subtitle*/}
        <Text color={fontColor} fontSize="2xl" textAlign="center" w="full">
          {`An AVM wallet that goes beyond just DeFi.`}
        </Text>

        {/*button*/}
        <LinkButton href="/#download" size="lg">
          Download Now
        </LinkButton>
      </VStack>

      {/*attribution*/}
      <div className={styles.header__attribution}>
        <p className={styles['attribution-text']}>
          Image by{` `}
          <a
            href="https://www.freepik.com/free-ai-image/abstract-fantasy-landscape-with-color-year-purple-tones_169082662.htm#fromView=search&page=2&position=1&uuid=d339e0f1-37a4-4fda-a7b9-f9f4a8a65172"
            target="_blank"
          >
            freepik
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
