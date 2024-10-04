// hooks
import useColorModeValue from '@site/src/hooks/useColorModeValue';

export default function usePrimaryColorScheme(): string {
  return useColorModeValue('primaryLight', 'primaryDark');
}
