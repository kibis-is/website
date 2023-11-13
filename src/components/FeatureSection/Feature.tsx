import React, { FC } from 'react';

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
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
