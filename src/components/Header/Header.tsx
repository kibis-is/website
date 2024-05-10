import clsx from 'clsx';
import React, { FC } from 'react';

// components
import LinkButton from '@site/src/components/LinkButton';
import ThemedImage from '@theme/ThemedImage';

// styles
import styles from './styles.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.container__outer}>
      <div className={styles.container__content}>
        {/*title*/}
        <div className={clsx(styles.container, styles.container__text)}>
          <h1 className={clsx(styles.text, styles['text--title'])}>
            Your Ultimate AVM Utility Wallet
          </h1>

          {/*subtitle*/}
          <p className={clsx(styles.text, styles['text--subtitle'])}>
            An AVM wallet in your browser that goes beyond just DeFi.
          </p>

          {/*button*/}
          <div className={styles['button-container']}>
            <LinkButton fullWidth={true} href="/#download">
              Download Now
            </LinkButton>
          </div>
        </div>

        {/*image*/}
        <div className={clsx(styles.container, styles.container__image)}>
          <ThemedImage
            alt="Wallet home screen"
            className={styles.image}
            sources={{
              dark: '/images/home_screen-dark.png',
              light: '/images/home_screen-light.png',
            }}
          />
        </div>
      </div>

      {/*attribution*/}
      <div className={styles.container__attribution}>
        <p className={clsx(styles.text, styles['text--attribution'])}>
          Image by{` `}
          <a
            href="https://www.freepik.com/free-vector/gradient-geometric-background_12283006.htm"
            target="_blank"
          >
            Freepik
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
