import React, { FC, PropsWithChildren } from 'react';

// styles
import styles from './styles.module.scss';

const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.line} />
        <h1 className={styles.text}>{children}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
