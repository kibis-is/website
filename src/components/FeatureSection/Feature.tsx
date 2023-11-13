import React, { FC } from 'react';

// components
import Heading from '@site/src/components/Heading';
import Text from '@site/src/components/Text';

// styles
import styles from './styles.module.scss';

// types
import { IFeatureItem } from './types';

type IProps = IFeatureItem;

const Feature: FC<IProps> = ({ title, SvgComponent, description }: IProps) => {
  return (
    <div className={styles.feature__item}>
      <div className={styles['feature__image-container']}>
        <SvgComponent className={styles.feature__image} role="img" />
      </div>

      <div className={styles['feature__text-container']}>
        <Heading level="h2">{title}</Heading>
        <Text>{description}</Text>
      </div>
    </div>
  );
};

export default Feature;
