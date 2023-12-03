import React, { FC } from 'react';

// components
import Section from '@site/src/components/Section';
import ConceptItem from './ConceptItem';

// images
import concept001Svg from '@site/static/images/concept_001.svg';
import concept002Svg from '@site/static/images/concept_002.svg';
import concept003Svg from '@site/static/images/concept_003.svg';

// styles
import styles from './styles.module.scss';

// types
import { IDefaultSectionProps } from '@site/src/types';
import { IConceptItemProps } from './types';

type IProps = IDefaultSectionProps;

const ConceptsSection: FC<IProps> = ({ variant }: IProps) => {
  const items: IConceptItemProps[] = [
    {
      title: 'Not Just For DeFi',
      SvgComponent: concept001Svg,
      description: (
        <>
          Kibisis differs from most wallets by focusing on assets as a utility,
          not just for DeFi.
        </>
      ),
    },
    {
      title: 'AVM Compatible',
      SvgComponent: concept002Svg,
      description: (
        <>
          Kibisis not only works with Algorand, but endeavours to encompass all
          AVM chains.
        </>
      ),
    },
    {
      title: 'Browser Extension',
      SvgComponent: concept003Svg,
      description: (
        <>
          Leveraging the security and convenience of browser extensions, Kibisis
          will always be there when you need it most.
        </>
      ),
    },
  ];

  return (
    <Section id="concepts" title="Concepts" variant={variant}>
      <div className={styles.container__items}>
        {items.map((props, index) => (
          <ConceptItem {...props} key={`concept-item-${index}`} />
        ))}
      </div>
    </Section>
  );
};

export default ConceptsSection;
