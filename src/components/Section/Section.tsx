import React, { FC, ReactElement } from 'react';

// components
import SectionTitle from '@site/src/components/SectionTitle';

// styles
import styles from './index.module.scss';

interface IProps {
  children: ReactElement;
  id: string;
  title: string;
}

const Section: FC<IProps> = ({ children, id, title }: IProps) => {
  return (
    <section className={styles.container} id={`#${id}`}>
      <SectionTitle>{title}</SectionTitle>

      {children}
    </section>
  );
};

export default Section;
