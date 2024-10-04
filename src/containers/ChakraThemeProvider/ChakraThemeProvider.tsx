import { ChakraProvider, createSystem } from '@chakra-ui/react';
import React, { type FC, type PropsWithChildren } from 'react';

// theme
import { config as themeConfig } from '@site/src/theme';

const ChakraThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraProvider value={createSystem(themeConfig)}>
      {children}
    </ChakraProvider>
  );
};

export default ChakraThemeProvider;
