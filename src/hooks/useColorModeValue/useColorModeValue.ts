import { useColorMode } from '@docusaurus/theme-common';

export default function useColorModeValue<
  LightValue = unknown,
  DarkValue = unknown,
>(lightValue: LightValue, darkValue: DarkValue): LightValue | DarkValue {
  const { colorMode } = useColorMode();

  if (colorMode === 'dark') {
    return darkValue;
  }

  return lightValue;
}
