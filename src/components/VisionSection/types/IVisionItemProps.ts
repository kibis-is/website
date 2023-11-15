import { ComponentProps, ComponentType, ReactElement } from 'react';

interface IVisionItemProps {
  SvgComponent: ComponentType<ComponentProps<'svg'>>;
  description: ReactElement;
  title: string;
}

export default IVisionItemProps;
