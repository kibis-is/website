import clsx from 'clsx';
import React, { FC } from 'react';

// components
import ThemedImage from '@theme/ThemedImage';

// styles
import styles from './styles.module.scss';

// types
import { IThemedImageSources } from '@site/src/types';

interface IProps {
  label: string;
  maxWidth?: string;
  imageSources: IThemedImageSources;
}

const BlogScreenshotImage: FC<IProps> = ({
  label,
  maxWidth = '400px',
  imageSources,
}: IProps) => {
  return (
    <div className={clsx(styles.container, styles.container__outer)}>
      <div
        className={styles.container}
        style={{
          maxWidth,
        }}
      >
        <ThemedImage
          alt={label}
          aria-label={label}
          className={styles.image}
          sources={imageSources}
        />
      </div>
    </div>
  );
};

export default BlogScreenshotImage;
