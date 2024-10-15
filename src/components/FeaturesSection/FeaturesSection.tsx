import { Link, Text } from '@chakra-ui/react';
import { useColorMode } from '@docusaurus/theme-common';
import { translate } from '@docusaurus/Translate';
import { type FC } from 'react';

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
      altID: 'feature.security.imageAlt',
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
            {translate(
              {
                id: 'storysetAttribution',
              },
              {
                type: 'Data',
              }
            )}
          </Link>
        </Text>
      ),
      descriptionIDs: [
        'feature.security.description1',
        'feature.security.description2',
      ],
      src: `/images/features/security_feature-${colorMode}.svg`,
      titleID: 'feature.security.title',
    },
    {
      altID: 'feature.assets.imageAlt',
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
            {translate(
              {
                id: 'storysetAttribution',
              },
              {
                type: 'Work',
              }
            )}
          </Link>
        </Text>
      ),
      descriptionIDs: [
        'feature.assets.description1',
        'feature.assets.description2',
      ],
      src: `/images/features/assets_feature-${colorMode}.svg`,
      titleID: 'feature.assets.title',
    },
    {
      altID: 'feature.payment.imageAlt',
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
            {translate(
              {
                id: 'storysetAttribution',
              },
              {
                type: 'Business',
              }
            )}
          </Link>
        </Text>
      ),
      descriptionIDs: ['feature.payment.description'],
      src: `/images/features/payments_feature-${colorMode}.svg`,
      titleID: 'feature.payment.title',
    },
    {
      altID: 'feature.identity.imageAlt',
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
            {translate(
              {
                id: 'storysetAttribution',
              },
              {
                type: 'Online',
              }
            )}
          </Link>
        </Text>
      ),
      descriptionIDs: [
        'feature.identity.description1',
        'feature.identity.description2',
        'feature.identity.description3',
      ],
      src: `/images/features/identity_feature-${colorMode}.svg`,
      titleID: 'feature.identity.title',
    },
  ];

  return (
    <Section
      id="features"
      title={translate({ id: 'title.features' })}
      variant={variant}
    >
      <Carousel
        items={items.map((props, index) => ({
          children: (
            <FeatureItem
              key={`${FeaturesSection.name}-feature-item-${index}`}
              {...props}
            />
          ),
          label: translate({ id: props.titleID }),
        }))}
      />
    </Section>
  );
};

export default FeaturesSection;
