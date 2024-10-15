import clsx from 'clsx';
import React, { type FC } from 'react';

// components
import ThemedImage from '@theme/ThemedImage';

// styles
import styles from './styles.module.scss';

// types
import type { IProps } from './types';

const BlogScreenshotImage: FC<IProps> = ({
  label,
  maxWidth = '400px',
  imageSources,
}) => {
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
