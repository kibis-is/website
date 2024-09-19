import clsx from 'clsx';
import React, { type FC, type ButtonHTMLAttributes } from 'react';

// styles
import styles from './styles.module.scss';

// types
import type { IProps } from './types';

const Button: FC<IProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  fullWidth = false,
  shadow = false,
  ...buttonProps
}) => {
  const classNames: string[] = [styles.button];

  if (fullWidth) {
    classNames.push(styles['button--full-width']);
  }

  if (shadow) {
    classNames.push(styles['button--shadow']);
  }

  return <button {...buttonProps} className={clsx(classNames)} />;
};

export default Button;
