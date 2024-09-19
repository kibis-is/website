import React, { type FC, type PropsWithChildren } from 'react';

// styles
import styles from './styles.module.scss';

// types
import type { IProps } from './types';

const Text: FC<IProps & PropsWithChildren> = ({ children, bold = false }) => {
  let className: string = styles.text;

  if (bold) {
    className = `${className} ${styles['text--bold']}`;
  }

  return <p className={className}>{children}</p>;
};

export default Text;
