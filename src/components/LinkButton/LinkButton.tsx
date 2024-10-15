import {
  type PropsWithoutRef,
  type ForwardRefExoticComponent,
  forwardRef,
  type RefAttributes,
} from 'react';
import {
  type ButtonProps,
  Link as ChakraLink,
  type LinkProps,
} from '@chakra-ui/react';
import { IoOpenOutline } from 'react-icons/io5';

// components
import Button from '@site/src/components/Button';

// hooks
import usePrimaryButtonTextColor from '@site/src/hooks/usePrimaryButtonTextColor';

const LinkButton: ForwardRefExoticComponent<
  PropsWithoutRef<LinkProps> &
    PropsWithoutRef<ButtonProps> &
    RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, ButtonProps & LinkProps>((props, ref) => {
  // hooks
  const primaryButtonTextColor = usePrimaryButtonTextColor();

  return (
    <Button
      {...props}
      _hover={{
        color:
          props.variant !== 'outline' ? primaryButtonTextColor : props.color,
        textDecoration: 'none',
      }}
      as={ChakraLink}
      ref={ref}
      sx={{
        textDecoration: 'none',
      }}
      {...(props.isExternal && {
        rightIcon: <IoOpenOutline />,
        target: '_blank',
      })}
    />
  );
});

LinkButton.displayName = 'LinkButton';

export default LinkButton;
