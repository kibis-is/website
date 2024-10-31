import { Box, Image, Link, Tooltip } from '@chakra-ui/react';
import clsx from 'clsx';
import type { FC } from 'react';

// styles
import styles from './styles.module.scss';

// types
import type { IProps } from './types';

const StoreBadge: FC<IProps> = ({ airaLabel, href, src, type }) => {
  // misc
  const image = (
    <Image aria-label={airaLabel} alt={airaLabel} h={20} src={src} />
  );

  if (!href) {
    return (
      <Tooltip label="Coming soon">
        <Box cursor="not-allowed" position="relative">
          {image}

          {/*ribbon*/}
          <div className={styles.ribbon__container}>
            <span className={styles.ribbon}>{`coming soon`.toUpperCase()}</span>
          </div>
        </Box>
      </Tooltip>
    );
  }

  return (
    <Link
      aria-label={airaLabel}
      href={href}
      isExternal={true}
      position="relative"
    >
      {image}

      {type === 'beta' && (
        <div className={styles.ribbon__container}>
          <span className={clsx(styles.ribbon, styles['ribbon--blue'])}>
            {`beta`.toUpperCase()}
          </span>
        </div>
      )}
    </Link>
  );
};

export default StoreBadge;
