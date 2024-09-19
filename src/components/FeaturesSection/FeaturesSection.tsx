import React, { type FC } from 'react';

// components
import Carousel from '@site/src/components/Carousel';
import Section from '@site/src/components/Section';
import FeatureItem from './FeatureItem';

// styles
import styles from './styles.module.scss';

// types
import type { IDefaultSectionProps } from '@site/src/types';
import type { IFeatureItemProps } from './types';

const FeaturesSection: FC<IDefaultSectionProps> = ({ variant }) => {
  const items: IFeatureItemProps[] = [
    {
      alt: 'Home screen',
      description:
        'Kibisis treats assets more as a utility rather than just a fungible currency.',
      imageSources: {
        dark: '/images/home_screen-dark.png',
        light: '/images/home_screen-light.png',
      },
      title: 'Assets Are Not Just Fungible Currency',
    },
    {
      alt: 'Asset transfer screen',
      description: 'Seamlessly transfer any asset to another address.',
      imageSources: {
        dark: '/images/send_assets_screen-dark.png',
        light: '/images/send_assets_screen-light.png',
      },
      title: 'Asset Transfer',
    },
    {
      alt: 'Add ARC-200 screen',
      description:
        'Kibisis not only supports AVM standard assets, it also supports ARC-0200. From Kibisis, you can check your balance, transfer and add any ARC-0200 asset.',
      imageSources: {
        dark: '/images/arc0200_support_screen-dark.png',
        light: '/images/arc0200_support_screen-light.png',
      },
      title: 'ARC-0200 Support',
    },
    {
      alt: 'Atomic transaction screen',
      description:
        'With AVM chains allowing up to 16 transactions to be grouped as an atomic transfer, Kibisis can sign all or multiple transactions within the atomic group.',
      imageSources: {
        dark: '/images/atomic_transactions_screen-dark.png',
        light: '/images/atomic_transactions_screen-light.png',
      },
      title: 'Atomic Transactions',
    },
  ];

  return (
    <Section id="features" title="Features" variant={variant}>
      <div className={styles['carousel-container']}>
        <Carousel
          items={items.map((props, index) => ({
            children: <FeatureItem key={`feature-item-${index}`} {...props} />,
            label: props.title,
          }))}
        />
      </div>
    </Section>
  );
};

export default FeaturesSection;
