import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import React, { FC } from 'react';

// hooks
import useTypewriterEffect from '../../hooks/useTypewriterEffect';

// styles
import styles from './index.module.scss';

const Header: FC = () => {
  const { siteConfig } = useDocusaurusContext();
  // hooks
  const tagline: string = useTypewriterEffect({
    text: siteConfig.tagline,
  });

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
          {tagline}
        </p>
      </div>
    </header>
  );
};

export default Header;
