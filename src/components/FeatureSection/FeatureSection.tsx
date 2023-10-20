import React, { FC } from 'react';

// components
import Feature from './Feature';

// images
import easyToUseSvg from '@site/static/images/undraw_docusaurus_mountain.svg';
import focusOnWhatMatterSvg from '@site/static/images/undraw_docusaurus_tree.svg';
import poweredByReact from '@site/static/images/undraw_docusaurus_react.svg';

// styles
import styles from './styles.module.scss';

// types
import { IFeatureItem } from './types';

const FeatureSection: FC = () => {
  const features: IFeatureItem[] = [
    {
      title: 'Not Just For DeFi',
      SvgComponent: easyToUseSvg,
      description: (
        <>
          Kibisis differs from most wallets by focusing on tokens as a utility,
          not just DeFi.
        </>
      ),
    },
    {
      title: 'AVM Compatible',
      SvgComponent: focusOnWhatMatterSvg,
      description: (
        <>
          Kibisis not only works with Algorand, but endeavours to encompass all
          AVM chains. With Algorand AND Voi compatibility.
        </>
      ),
    },
    {
      title: 'Browser Extension',
      SvgComponent: poweredByReact,
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
      <div className="container">
        <div className="row">
          {features.map(({ description, SvgComponent, title }, index) => (
            <Feature
              description={description}
              key={`feature-item-${index}`}
              SvgComponent={SvgComponent}
              title={title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
