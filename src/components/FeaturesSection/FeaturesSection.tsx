import { Stack } from '@chakra-ui/react';
import React, { type FC } from 'react';

// components
import Carousel from '@site/src/components/Carousel';
import FeatureItem from '@site/src/components/FeatureItem';
import Section from '@site/src/components/Section';

// types
import type { IDefaultSectionProps } from '@site/src/types';
import type { IProps as IFeatureItemProps } from '@site/src/components/FeatureItem';

const FeaturesSection: FC<IDefaultSectionProps> = ({ variant }) => {
  const items: IFeatureItemProps[] = [
    {
      alt: 'A man using a password to on a giant cell phone to highlight security',
      description:
        'Kibisis using cutting edge security to secure your accounts.',
      src: '/images/features/security_feature.jpg',
      title: 'Security Is Important',
    },
    {
      alt: 'A woman entering putting a puzzle piece on a giant computer screen.',
      description:
        'A wallet is a place where you can view all your assets in one place.',
      src: '/images/features/assets_feature.jpg',
      title: 'All Your Assets In One Place',
    },
    {
      alt: 'A man sitting down shopping online using his phone.',
      description:
        'Whether you are on your phone or on your laptop, Kibisis will always be there so you can make payments seamlessly.',
      src: '/images/features/payments_feature.jpg',
      title: 'Payments Made Easy',
    },
    {
      alt: 'A man sitting down filling out a form online using his tablet.',
      description:
        'A wallet is more than just a place to keep your assets: Kibisis is also your identity. You can use Kibisis to authenticate and prove your identity without having store your credentials in the cloud. You own your identity.',
      src: '/images/features/identity_feature.jpg',
      title: 'Your Online Identity',
    },
  ];

  return (
    <Section id="features" title="Features" variant={variant}>
      <Stack align="center" justify="center" w="full">
        <Carousel
          items={items.map((props, index) => ({
            children: (
              <FeatureItem
                key={`${FeaturesSection.name}-feature-item-${index}`}
                {...props}
              />
            ),
            label: props.title,
          }))}
        />
      </Stack>
    </Section>
  );
};

export default FeaturesSection;
