import React, { FC } from 'react';

// components
import Heading from '@site/src/components/Heading';
import Text from '@site/src/components/Text';

// styles
import styles from './styles.module.scss';

// types
import { IConceptItemProps } from './types';

type IProps = IConceptItemProps;

const ConceptItem: FC<IProps> = ({
  title,
  SvgComponent,
  description,
}: IProps) => {
  return (
    <div className={styles.item}>
      <div className={styles['image-container']}>
        <SvgComponent className={styles.image} role="img" />
      </div>

      <div className={styles['text-container']}>
        <Heading level="h2">{title}</Heading>
        <Text>{description}</Text>
      </div>
    </div>
  );
};

export default ConceptItem;
