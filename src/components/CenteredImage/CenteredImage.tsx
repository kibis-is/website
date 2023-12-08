import React, { FC } from 'react';

// styles
import styles from './styles.module.scss';

interface IProps {
  label: string;
  maxWidth?: string;
  src: string;
}

const CenteredImage: FC<IProps> = ({ label, maxWidth, src }: IProps) => {
  return (
    <div className={styles.container}>
      <img
        alt={label}
        aria-label={label}
        src={src}
        style={{
          maxWidth,
        }}
      />
    </div>
  );
};

export default CenteredImage;
