import clsx from 'clsx';
import React, { type FC, type AnchorHTMLAttributes } from 'react';

// styles
import styles from './styles.module.scss';

// types
import type { IProps } from './types';

const LinkButton: FC<IProps & AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  disabled = false,
  fullWidth = false,
  ...anchorProps
}: IProps) => {
  const classNames: string[] = [styles['link-button']];

  if (disabled) {
    classNames.push(styles['link-button--disabled']);
  }

  if (fullWidth) {
    classNames.push(styles['link-button--full-width']);
  }

  return <a {...anchorProps} className={clsx(classNames)} />;
};

export default LinkButton;
