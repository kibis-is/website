import {
  type PropsWithoutRef,
  type ForwardRefExoticComponent,
  forwardRef,
  type RefAttributes,
} from 'react';
import { Button as ChakraButton, type ButtonProps } from '@chakra-ui/react';

// hooks
import usePrimaryButtonTextColor from '@site/src/hooks/usePrimaryButtonTextColor';
import usePrimaryColorScheme from '@site/src/hooks/usePrimaryColorScheme';

const Button: ForwardRefExoticComponent<
  PropsWithoutRef<ButtonProps> & RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
  // hooks
  const primaryButtonTextColor = usePrimaryButtonTextColor();
  const primaryColorScheme = usePrimaryColorScheme();

  return (
    <ChakraButton
      color={props.variant !== 'outline' ? primaryButtonTextColor : props.color}
      colorScheme={primaryColorScheme}
      {...props}
      borderRadius="full"
      ref={ref}
    />
  );
});

Button.displayName = 'Button';

export default Button;
