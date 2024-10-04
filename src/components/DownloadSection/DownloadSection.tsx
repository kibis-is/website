import {
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React, { type FC } from 'react';

// components
import Section from '@site/src/components/Section';
import WebDownloadItem from '@site/src/components/WebDownloadItem';

// constants
import { CHROME_STORE_LINK, DEFAULT_GAP } from '@site/src/constants';

// hooks
import usePrimaryButtonTextColor from '@site/src/hooks/usePrimaryButtonTextColor';
import usePrimaryColor from '@site/src/hooks/usePrimaryColor';
import usePrimaryColorScheme from '@site/src/hooks/usePrimaryColorScheme';

// images
import braveSvg from '@site/static/images/brave.svg';
import chromeSvg from '@site/static/images/chrome.svg';
import edgeSvg from '@site/static/images/edge.svg';
import firefoxSvg from '@site/static/images/firefox.svg';

// types
import type { IDefaultSectionProps } from '@site/src/types';

const DownloadSection: FC<IDefaultSectionProps> = ({ variant }) => {
  // hooks
  const primaryButtonTextColor = usePrimaryButtonTextColor();
  const primaryColor = usePrimaryColor();
  const primaryColorScheme = usePrimaryColorScheme();

  return (
    <Section id="download" title="Download" variant={variant}>
      <Tabs
        align="center"
        colorScheme={primaryColorScheme}
        isLazy={true}
        variant="unstyled"
        w="full"
      >
        <TabList>
          <Tab
            _selected={{
              bg: primaryColor,
              color: primaryButtonTextColor,
            }}
            borderBottomWidth={1}
            borderColor={primaryColor}
            borderStartRadius="full"
            borderLeftWidth={1}
            borderRightWidth={0}
            borderTopWidth={1}
          >
            Web
          </Tab>

          <Tab
            _selected={{
              bg: primaryColor,
              color: primaryButtonTextColor,
            }}
            borderColor={primaryColor}
            borderWidth={1}
          >
            Android
          </Tab>

          <Tab
            _selected={{
              bg: primaryColor,
              color: primaryButtonTextColor,
            }}
            borderBottomWidth={1}
            borderColor={primaryColor}
            borderEndRadius="full"
            borderLeftWidth={0}
            borderRightWidth={1}
            borderTopWidth={1}
          >
            iOS
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel mt={DEFAULT_GAP * 2}>
            <HStack justify="space-evenly" spacing={DEFAULT_GAP} w="full">
              {/*brave*/}
              <WebDownloadItem
                downloadUri={CHROME_STORE_LINK}
                name="Brave"
                SvgComponent={braveSvg}
              />

              {/*chrome*/}
              <WebDownloadItem
                downloadUri={CHROME_STORE_LINK}
                name="Chrome"
                SvgComponent={chromeSvg}
              />

              {/*edge*/}
              <WebDownloadItem name="Edge" SvgComponent={edgeSvg} />

              {/*firefox*/}
              <WebDownloadItem name="Firefox" SvgComponent={firefoxSvg} />
            </HStack>
          </TabPanel>

          <TabPanel>
            <p>Android</p>
          </TabPanel>

          <TabPanel>
            <p>iOS</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Section>
  );
};

export default DownloadSection;
