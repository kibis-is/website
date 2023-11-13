import React, { FC } from 'react';

// components
import Feature from './Feature';

// images
import feature001Svg from '@site/static/images/feature_001.svg';
import feature002Svg from '@site/static/images/feature_002.svg';
import feature003Svg from '@site/static/images/feature_003.svg';

// styles
import styles from './styles.module.scss';

// types
import { IFeatureItem } from './types';

const FeatureSection: FC = () => {
  const features: IFeatureItem[] = [
    {
      title: 'Not Just For DeFi',
      SvgComponent: feature001Svg,
      description: (
        <>
          Kibisis differs from most wallets by focusing on tokens as a utility,
          not just for DeFi.
        </>
      ),
    },
    {
      title: 'AVM Compatible',
      SvgComponent: feature002Svg,
      description: (
        <>
          Kibisis not only works with Algorand, but endeavours to encompass all
          AVM chains. With Algorand AND Voi compatibility.
        </>
      ),
    },
    {
      title: 'Browser Extension',
      SvgComponent: feature003Svg,
      description: (
        <>
          Leveraging the security and convenience of browser extensions, Kibisis
          will always be there when you need it most.
        </>
      ),
    },
  ];

  return (
    <section className={styles.feature__section}>
      {features.map(({ description, SvgComponent, title }, index) => (
        <Feature
          description={description}
          key={`feature-item-${index}`}
          SvgComponent={SvgComponent}
          title={title}
        />
      ))}
    </section>
  );
};

export default FeatureSection;
