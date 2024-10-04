// hooks
import useColorModeValue from '@site/src/hooks/useColorModeValue';

export default function useSubTextColor(): string {
  return useColorModeValue('gray.500', 'whiteAlpha.700');
}
