import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { FC } from 'react';

// styles
import styles from './index.module.scss';
import clsx from 'clsx';

const Header: FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.header}>
      <div className="container">
        <h1
          className={clsx(styles.header__text, styles['header__text--title'])}
        >
          {siteConfig.title}
        </h1>
        <p
          className={clsx(
            styles.header__text,
            styles['header__text--subtitle']
          )}
        >
          {siteConfig.tagline}
        </p>
      </div>
    </header>
  );
};

export default Header;
