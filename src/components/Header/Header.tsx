import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import React, { FC } from 'react';

// styles
import styles from './index.module.scss';

const Header: FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.hero__banner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
};

export default Header;
