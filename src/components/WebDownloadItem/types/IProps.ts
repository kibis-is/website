import type { ComponentProps, ComponentType } from 'react';

interface IProps {
  buttonLabel?: string;
  downloadUri?: string;
  name: string;
  SvgComponent: ComponentType<ComponentProps<'svg'>>;
}

export default IProps;
