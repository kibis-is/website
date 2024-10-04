import { Box, Image, Link, Tooltip } from '@chakra-ui/react';
import type { FC } from 'react';

// styles
import styles from './styles.module.scss';

// types
import type { IProps } from './types';

const StoreBadge: FC<IProps> = ({ airaLabel, href, src }) => {
  // misc
  const image = (
    <Image aria-label={airaLabel} alt={airaLabel} h={20} src={src} />
  );

  if (!href) {
    return (
      <Tooltip label="Coming soon">
        <Box cursor="not-allowed" position="relative">
          {image}

          <div className={styles.ribbon}>
            <span>{`coming soon`.toUpperCase()}</span>
          </div>
        </Box>
      </Tooltip>
    );
  }

  return (
    <Link aria-label={airaLabel} href={href} isExternal={true}>
      {image}
    </Link>
  );
};

export default StoreBadge;
