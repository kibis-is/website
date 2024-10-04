// hooks
import useColorModeValue from '@site/src/hooks/useColorModeValue';

export default function useDefaultTextColor(): string {
  return useColorModeValue('gray.600', 'whiteAlpha.800');
}
