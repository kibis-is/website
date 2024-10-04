import clsx from 'clsx';
import type { FC } from 'react';

// components
import LinkButton from '@site/src/components/LinkButton';

// styles
import styles from './styles.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header__outer}>
      <div className={styles.header__content}>
        {/*title*/}
        <h1 className={clsx(styles.text, styles['text--title'])}>
          Your Ultimate AVM Utility Wallet
        </h1>

        {/*subtitle*/}
        <p className={clsx(styles.text, styles['text--subtitle'])}>
          An AVM wallet that goes beyond just DeFi.
        </p>

        {/*button*/}
        <div className={styles['button-container']}>
          <LinkButton href="/#download" size="lg">
            Download Now
          </LinkButton>
        </div>
      </div>

      {/*attribution*/}
      <div className={styles.header__attribution}>
        <p className={clsx(styles.text, styles['text--attribution'])}>
          Image by{` `}
          <a
            href="https://www.freepik.com/free-ai-image/abstract-fantasy-landscape-with-color-year-purple-tones_169082662.htm#fromView=search&page=2&position=1&uuid=d339e0f1-37a4-4fda-a7b9-f9f4a8a65172"
            target="_blank"
          >
            freepik
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
