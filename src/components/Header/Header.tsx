import clsx from 'clsx';
import React, { FC } from 'react';

// components
import ThemedImage from '@theme/ThemedImage';

// styles
import styles from './index.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      {/*title*/}
      <div className={clsx(styles.container, styles['text-container'])}>
        <h1 className={clsx(styles.text, styles['text--title'])}>
          The AVM utility wallet
        </h1>

        <p className={clsx(styles.text, styles['text--subtitle'])}>
          A wallet that is not just for DeFi, but also focuses on utility.
        </p>
      </div>

      {/*image*/}
      <div className={clsx(styles.container, styles['image-container'])}>
        <ThemedImage
          alt="Wallet home screen"
          className={styles.image}
          sources={{
            dark: '/images/home_screen-dark.png',
            light: '/images/home_screen-light.png',
          }}
        />
      </div>
    </header>
  );
};

export default Header;
