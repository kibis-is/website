import clsx from 'clsx';
import React, { type FC, type PropsWithChildren } from 'react';

// components
import SectionTitle from '@site/src/components/SectionTitle';

// styles
import styles from './styles.module.scss';

// types
import type { IProps } from './types';

const Section: FC<IProps & PropsWithChildren> = ({
  children,
  id,
  title,
  variant = 'primary',
}) => {
  let containerClass = styles.container;

  if (variant === 'accent') {
    containerClass = clsx(styles.container, styles['container--accent']);
  }

  return (
    <section className={containerClass} id={id}>
      <SectionTitle>{title}</SectionTitle>

      {children}
    </section>
  );
};

export default Section;
