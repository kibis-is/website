import { ChakraProvider } from '@chakra-ui/react';
import React, { type FC, type PropsWithChildren } from 'react';

// styles
import styles from './styles.module.scss';

// theme
import { theme } from '@site/src/themes';

const Main: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => (
  <ChakraProvider theme={theme}>
    <main className={styles.main}>{children}</main>
  </ChakraProvider>
);

export default Main;
