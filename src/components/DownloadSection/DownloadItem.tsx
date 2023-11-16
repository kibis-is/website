import React, { FC } from 'react';

// components
import LinkButton from '@site/src/components/LinkButton';
import Heading from '@site/src/components/Heading';

// styles
import styles from './styles.module.scss';

// types
import { IDownloadItemProps } from './types';

type IProps = IDownloadItemProps;

const DownloadItem: FC<IProps> = ({
  buttonLabel,
  downloadUri,
  name,
  SvgComponent,
}: IProps) => {
  return (
    <div className={styles.item}>
      {/*image*/}
      <div className={styles['image-container']}>
        <SvgComponent className={styles.image} role="img" />
      </div>

      {/*name*/}
      <div className={styles['text-container']}>
        <Heading level="h2">{name}</Heading>
      </div>

      {/*button*/}
      <LinkButton disabled={!downloadUri} fullWidth={true} href={downloadUri}>
        {downloadUri ? buttonLabel : 'Coming Soon!'}
      </LinkButton>
    </div>
  );
};

export default DownloadItem;
