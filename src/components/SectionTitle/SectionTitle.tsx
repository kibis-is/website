import React, { FC, ReactElement } from 'react';

// styles
import styles from './index.module.scss';

interface IProps {
  children: ReactElement | string;
  id?: string;
}

const SectionTitle: FC<IProps> = ({ children, id }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} id={id}>
        <div className={styles.line} />
        <h1 className={styles.text}>{children}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
