import clsx from 'clsx';
import React, { FC } from 'react';
import { IconType } from 'react-icons';

// styles
import styles from './index.module.scss';

interface IProps {
  Icon: IconType;
  isPrev: boolean;
  label: string;
  onClick: () => void;
}

const CarouselButton: FC<IProps> = ({ Icon, isPrev, onClick }: IProps) => {
  return (
    <div
      className={clsx(
        styles.container,
        isPrev ? styles['container--previous'] : styles['container--next']
      )}
    >
      <button className={styles.button} onClick={onClick}>
        <Icon className={styles.icon} />
      </button>
    </div>
  );
};

export default CarouselButton;
