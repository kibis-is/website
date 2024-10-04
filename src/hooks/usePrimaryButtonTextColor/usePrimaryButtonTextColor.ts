// hooks
import useColorModeValue from '@site/src/hooks/useColorModeValue';

export default function usePrimaryButtonTextColor(): string {
  return useColorModeValue('white', 'gray.800');
}
