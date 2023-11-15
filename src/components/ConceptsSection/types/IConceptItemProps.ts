import { ComponentProps, ComponentType, ReactElement } from 'react';

interface IConceptItemProps {
  SvgComponent: ComponentType<ComponentProps<'svg'>>;
  description: ReactElement;
  title: string;
}

export default IConceptItemProps;
