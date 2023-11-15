import React, { FC } from 'react';

// components
import Section from '@site/src/components/Section';

// styles
import styles from './index.module.scss';

// types
import { IDefaultSectionProps } from '@site/src/types';

type IProps = IDefaultSectionProps;

const FeaturesSection: FC<IProps> = ({ variant }: IProps) => {
  return (
    <Section id="features" title="Features" variant={variant}>
      <div />
    </Section>
  );
};

export default FeaturesSection;
