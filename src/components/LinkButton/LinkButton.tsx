import clsx from 'clsx';
import React, { FC, AnchorHTMLAttributes } from 'react';

// styles
import styles from './styles.module.scss';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
  fullWidth?: boolean;
}

const LinkButton: FC<IProps> = ({
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
