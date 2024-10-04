import React, { type FC, type PropsWithChildren } from 'react';

// styles
import styles from './styles.module.scss';

const Main: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
