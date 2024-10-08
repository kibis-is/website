import { Link, Stack, Text } from '@chakra-ui/react';
import { useColorMode } from '@docusaurus/theme-common';
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
      description:
        'Kibisis using the best-in-class security techniques to insure your accounts are secure. Kibisis will never transfer your private keys from your device and is a fully self-custody wallet. We believe in empowering the individual.',
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
      description:
        'A wallet is a place where you can view all your assets in one place. Kibisis supports a wide range of asset types and is always working with the latest dApps to provide a rich experience.',
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
      description:
        'Whether you are on your phone, your tablet or your desktop, Kibisis will always be there so you can make, or take, payments seamlessly.',
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
      description:
        'A wallet is more than just a place to keep your assets; it is also your identity. You can use Kibisis to authenticate and prove your identity without having store your credentials in the cloud. You own your identity.',
      src: `/images/features/identity_feature-${colorMode}.svg`,
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
