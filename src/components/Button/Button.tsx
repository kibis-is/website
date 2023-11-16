import clsx from 'clsx';
import React, { FC, ButtonHTMLAttributes } from 'react';

// styles
import styles from './styles.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const Button: FC<IProps> = ({ fullWidth = false, ...buttonProps }: IProps) => {
  const classNames: string[] = [styles.button];

  if (fullWidth) {
    classNames.push(styles['link-button--full-width']);
  }

  return <button {...buttonProps} className={clsx(classNames)} />;
};

export default Button;
