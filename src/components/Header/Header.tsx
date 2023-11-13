import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';
import React, { FC } from 'react';

// styles
import styles from './index.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      {/*title*/}
      <div
        className={clsx(
          styles['header__container'],
          styles['header__text-container']
        )}
      >
        <h1
          className={clsx(styles.header__text, styles['header__text--title'])}
        >
          The AVM utility wallet
        </h1>

        <p
          className={clsx(
            styles.header__text,
            styles['header__text--subtitle']
          )}
        >
          A wallet that is not just for DeFi, but also focuses on utility.
        </p>
      </div>

      {/*image*/}
      <div
        className={clsx(
          styles['header__container'],
          styles['header__image-container']
        )}
      >
        <ThemedImage
          alt="Wallet home screen"
          className={styles['header__image']}
          sources={{
            dark: '/images/wallet_home_screen-dark.png',
            light: '/images/wallet_home_screen-light.png',
          }}
        />
      </div>
    </header>
  );
};

export default Header;
