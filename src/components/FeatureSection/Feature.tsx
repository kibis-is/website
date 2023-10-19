import clsx from 'clsx';
import React, { FC } from 'react';

// styles
import styles from './styles.module.css';

// types
import { IFeatureItem } from './types';

type IProps = IFeatureItem;

const Feature: FC<IProps> = ({ title, SvgComponent, description }: IProps) => {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <SvgComponent className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
