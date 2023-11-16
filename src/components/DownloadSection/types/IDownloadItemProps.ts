import { ComponentProps, ComponentType } from 'react';

interface IDownloadItemProps {
  buttonLabel: string;
  downloadUri?: string;
  name: string;
  SvgComponent: ComponentType<ComponentProps<'svg'>>;
}

export default IDownloadItemProps;
