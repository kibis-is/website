import { Link, Text } from '@chakra-ui/react';
import { useColorMode } from '@docusaurus/theme-common';
import { translate } from '@docusaurus/Translate';
import React, { type FC } from 'react';

// components
import Carousel from '@site/src/components/Carousel';
import FeatureItem from '@site/src/components/FeatureItem';
import Section from '@site/src/components/Section';

// types
import type { IDefaultSectionProps } from '@site/src/types';
import type { IProps as IFeatureItemProps } from '@site/src/components/FeatureItem';

const FeaturesSection: FC<IDefaultSectionProps> = ({ variant }) => {
  const { colorMode } = useColorMode();
  // misc
  const items: IFeatureItemProps[] = [
    {
      alt: 'A man using a password to on a giant cell phone to highlight security',
      attribution: (
        <Text>
          <Link
            _hover={{
              color: 'primaryDark.300',
            }}
            color="primaryDark.500"
            href="https://storyset.com/data"
            isExternal={true}
          >
            Data illustrations by Storyset
          </Link>
        </Text>
      ),
      description: [
        'Kibisis uses the best-in-class security techniques to insure your accounts are secure. Kibisis will never transfer your private keys from your device and is a fully self-custodial wallet.',
        'We are firmly committed to in empowering the individual.',
      ],
      src: `/images/features/security_feature-${colorMode}.svg`,
      title: 'Security Is Important',
    },
    {
      alt: 'A woman entering putting a puzzle piece on a giant computer screen.',
      attribution: (
        <Text>
          <Link
            _hover={{
              color: 'primaryDark.300',
            }}
            color="primaryDark.500"
            href="https://storyset.com/work"
            isExternal={true}
          >
            Work illustrations by Storyset
          </Link>
        </Text>
      ),
      description: [
        'Kibisis supports a wide range of asset types and we believe accessing your assets should not be difficult. That is why Kibisis endeavors to make this process a rich and rewarding experience.',
        'We always strive to work with the latest dApps to achieve this rich experience.',
      ],
      src: `/images/features/assets_feature-${colorMode}.svg`,
      title: 'All Your Assets In One Place',
    },
    {
      alt: 'A man sitting down shopping online using his phone.',
      attribution: (
        <Text>
          <Link
            _hover={{
              color: 'primaryDark.300',
            }}
            color="primaryDark.500"
            href="https://storyset.com/business"
            isExternal={true}
          >
            Business illustrations by Storyset
          </Link>
        </Text>
      ),
      description: [
        'Whether you are on your phone, your tablet or your desktop, Kibisis will always be there so you can make, or take, payments seamlessly.',
      ],
      src: `/images/features/payments_feature-${colorMode}.svg`,
      title: 'Payments Made Easy',
    },
    {
      alt: 'A man sitting down filling out a form online using his tablet.',
      attribution: (
        <Text>
          <Link
            _hover={{
              color: 'primaryDark.300',
            }}
            color="primaryDark.500"
            href="https://storyset.com/online"
            isExternal={true}
          >
            Online illustrations by Storyset
          </Link>
        </Text>
      ),
      description: [
        'A wallet is more than just a place to keep your assets; it is your identity.',
        'We see your wallet as away to prove your identity without having store your credentials in the cloud.',
        'You should own your identity.',
      ],
      src: `/images/features/identity_feature-${colorMode}.svg`,
      title: 'Your Online Identity',
    },
  ];

  return (
    <Section id="features" title="Features" variant={variant}>
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
    </Section>
  );
};

export default FeaturesSection;
