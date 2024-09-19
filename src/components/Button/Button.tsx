import clsx from 'clsx';
import React, { type FC, type ButtonHTMLAttributes } from 'react';

// styles
import styles from './styles.module.scss';

// types
import type { IProps } from './types';

const Button: FC<IProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  fullWidth = false,
  ...buttonProps
}) => {
  const classNames: string[] = [styles.button];

  if (fullWidth) {
    classNames.push(styles['link-button--full-width']);
  }

  return <button {...buttonProps} className={clsx(classNames)} />;
};

export default Button;
