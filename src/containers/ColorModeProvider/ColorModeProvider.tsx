import { useColorMode as useChakraColorMode } from '@chakra-ui/react';
import { useColorMode as useDocusaurusColorMode } from '@docusaurus/theme-common';
import { FC, PropsWithChildren, useEffect } from 'react';

const ColorModeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { setColorMode: setChakraColorMode } = useChakraColorMode();
  const { colorMode } = useDocusaurusColorMode();

  useEffect(() => setChakraColorMode(colorMode), [colorMode]);

  return children;
};

export default ColorModeProvider;
