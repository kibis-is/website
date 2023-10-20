import { ComponentProps, ComponentType, ReactElement } from 'react';

interface IFeatureItem {
  SvgComponent: ComponentType<ComponentProps<'svg'>>;
  description: ReactElement;
  title: string;
}

export default IFeatureItem;
