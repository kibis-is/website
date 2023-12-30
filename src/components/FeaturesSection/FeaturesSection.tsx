import React, { FC } from 'react';

// components
import Carousel from '@site/src/components/Carousel';
import Section from '@site/src/components/Section';
import FeatureItem from './FeatureItem';

// styles
import styles from './styles.module.scss';

// types
import { IDefaultSectionProps } from '@site/src/types';
import { IFeatureItemProps } from './types';

type IProps = IDefaultSectionProps;

const FeaturesSection: FC<IProps> = ({ variant }: IProps) => {
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
        'Kibisis not only supports the sending and receiving of AVM standard assets, it also supports ARC-200.',
      imageSources: {
        dark: '/images/add_arc200_asset_screen-dark.png',
        light: '/images/add_arc200_asset_screen-light.png',
      },
      title: 'ARC-200 Support',
    },
    {
      alt: 'Atomic transaction screen',
      description:
        'With AVM chains allowing up to 16 transactions to be grouped as an atomic transfer, Kibisis can sign all or multiple transactions within the atomic group.',
      imageSources: {
        dark: '/images/atomic_transaction_screen-dark.png',
        light: '/images/atomic_transaction_screen-light.png',
      },
      title: 'Atomic Transactions',
    },
    {
      alt: 'Sign JWT screen',
      description: `Kibisis allows you to sign arbitrary data, using your account's private key, but Kibisis can also recognise standardized formats, such as JWTs, which is presented into a more intuitive interface.`,
      imageSources: {
        dark: '/images/jwt_support_screen-dark.png',
        light: '/images/jwt_support_screen-light.png',
      },
      title: 'JWT (JSON Web Token) Support',
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
