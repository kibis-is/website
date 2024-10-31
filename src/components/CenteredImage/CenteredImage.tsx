import clsx from 'clsx';
import { type FC } from 'react';

// styles
import styles from './styles.module.scss';

// types
import type { IProps } from './types';

const CenteredImage: FC<IProps> = ({ label, maxWidth = '400px', src }) => {
  return (
    <div className={clsx(styles.container, styles.container__outer)}>
      <div
        className={styles.container}
        style={{
          maxWidth,
        }}
      >
        <img alt={label} aria-label={label} src={src} />
      </div>
    </div>
  );
};

export default CenteredImage;
