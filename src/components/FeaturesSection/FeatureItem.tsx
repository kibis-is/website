import clsx from 'clsx';
import React, { FC } from 'react';

// components
import Heading from '@site/src/components/Heading';
import Text from '@site/src/components/Text';
import ThemedImage from '@theme/ThemedImage';

// styles
import styles from './styles.module.scss';

// types
import { IFeatureItemProps } from './types';

type IProps = IFeatureItemProps;

const FeatureItem: FC<IProps> = ({
  alt,
  description,
  imageSources,
  title,
}: IProps) => {
  return (
    <div className={styles['item-container']}>
      {/*title/description*/}
      <div className={clsx(styles.item, styles['text-container'])}>
        <Heading level="h2">{title}</Heading>

        <Text>{description}</Text>
      </div>

      {/*image*/}
      <div className={clsx(styles.item, styles['image-container'])}>
        <ThemedImage
          alt={alt}
          className={styles.image}
          sources={imageSources}
        />
      </div>
    </div>
  );
};

export default FeatureItem;
