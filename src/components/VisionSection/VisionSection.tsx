import React, { FC } from 'react';

// components
import Section from '@site/src/components/Section';
import VisionItem from './VisionItem';

// images
import feature001Svg from '@site/static/images/feature_001.svg';
import feature002Svg from '@site/static/images/feature_002.svg';
import feature003Svg from '@site/static/images/feature_003.svg';

// styles
import styles from './styles.module.scss';

// types
import { IDefaultSectionProps } from '@site/src/types';
import { IVisionItemProps } from './types';

type IProps = IDefaultSectionProps;

const VisionSection: FC<IProps> = ({ variant }: IProps) => {
  const visionItems: IVisionItemProps[] = [
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
    <Section id="vision" title="Vision" variant={variant}>
      <div className={styles['items-container']}>
        {visionItems.map(({ description, SvgComponent, title }, index) => (
          <VisionItem
            description={description}
            key={`vision-item-${index}`}
            SvgComponent={SvgComponent}
            title={title}
          />
        ))}
      </div>
    </Section>
  );
};

export default VisionSection;
