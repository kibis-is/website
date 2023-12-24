import React, { FC } from 'react';

// components
import Section from '@site/src/components/Section';
import DownloadItem from './DownloadItem';

// constants
import { CHROME_STORE_LINK } from '@site/src/constants';

// images
import braveSvg from '@site/static/images/brave.svg';
import chromeSvg from '@site/static/images/chrome.svg';
import firefoxSvg from '@site/static/images/firefox.svg';

// styles
import styles from './styles.module.scss';

// types
import { IDefaultSectionProps } from '@site/src/types';
import { IDownloadItemProps } from './types';

type IProps = IDefaultSectionProps;

const DownloadSection: FC<IProps> = ({ variant }: IProps) => {
  const items: IDownloadItemProps[] = [
    {
      buttonLabel: 'Install',
      downloadUri: CHROME_STORE_LINK,
      name: 'Chrome',
      SvgComponent: chromeSvg,
    },
    {
      buttonLabel: 'Install',
      name: 'Firefox',
      SvgComponent: firefoxSvg,
    },
    {
      buttonLabel: 'Install',
      downloadUri: CHROME_STORE_LINK,
      name: 'Brave',
      SvgComponent: braveSvg,
    },
  ];

  return (
    <Section id="download" title="Download" variant={variant}>
      <div className={styles['items-container']}>
        {items.map((props, index) => (
          <DownloadItem {...props} key={`download-item-${index}`} />
        ))}
      </div>
    </Section>
  );
};

export default DownloadSection;
