import { HStack, Image, Stack, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { useColorMode } from '@docusaurus/theme-common';
import { type FC } from 'react';

// components
import BraveIcon from '@site/src/components/BraveIcon';
import ChromeIcon from '@site/src/components/ChromeIcon';
import EdgeIcon from '@site/src/components/EdgeIcon';
import FirefoxIcon from '@site/src/components/FirefoxIcon';
import PillTabs from '@site/src/components/PillTabs';
import Section from '@site/src/components/Section';
import StoreBadge from '@site/src/components/StoreBadge';
import WebDownloadItem from '@site/src/components/WebDownloadItem';

// constants
import { CHROME_STORE_LINK, DEFAULT_GAP } from '@site/src/constants';

// enums
import { PlatformEnum } from '@site/src/enums';

// hooks
import useDesktopAndUp from '@site/src/hooks/useDesktopAndUp';

// types
import type { IDefaultSectionProps } from '@site/src/types';

// utils
import checkPlatform from '@site/src/utils/checkPlatform';

const DownloadSection: FC<IDefaultSectionProps> = ({ variant }) => {
  const { colorMode } = useColorMode();
  // hooks
  const desktopAndUp = useDesktopAndUp();
  // misc
  const determineIndex = () => {
    const platform = checkPlatform();
    let index = 0;

    switch (platform) {
      case PlatformEnum.Android:
        index = 1;
        break;
      case PlatformEnum.IOS:
        index = 2;
        break;
      case PlatformEnum.Web:
      default:
        break;
    }

    return index;
  };

  return (
    <Section id="download" title="Download" variant={variant}>
      <PillTabs
        defaultIndex={determineIndex()}
        tabs={[
          {
            content: (
              <HStack justify="space-evenly" spacing={DEFAULT_GAP * 2} w="full">
                {/*screenshot*/}
                {desktopAndUp && (
                  <Image
                    alt="Home screen of the web extension"
                    boxShadow="xl"
                    maxW="380px"
                    src={`/images/screens/web_screen-${colorMode}.png`}
                  />
                )}

                <Wrap
                  align="center"
                  flexGrow={1}
                  justify="center"
                  spacing={DEFAULT_GAP - 2}
                  w="full"
                >
                  {/*brave*/}
                  <WrapItem>
                    <WebDownloadItem
                      downloadUri={CHROME_STORE_LINK}
                      icon={<BraveIcon />}
                      name="Brave"
                    />
                  </WrapItem>

                  {/*chrome*/}
                  <WrapItem>
                    <WebDownloadItem
                      downloadUri={CHROME_STORE_LINK}
                      icon={<ChromeIcon />}
                      name="Chrome"
                    />
                  </WrapItem>

                  {/*edge*/}
                  <WrapItem>
                    <WebDownloadItem icon={<EdgeIcon />} name="Edge" />
                  </WrapItem>

                  {/*firefox*/}
                  <WrapItem>
                    <WebDownloadItem icon={<FirefoxIcon />} name="Firefox" />
                  </WrapItem>
                </Wrap>
              </HStack>
            ),
            title: 'Web',
          },
          {
            content: (
              <HStack justify="space-evenly" spacing={DEFAULT_GAP} w="full">
                {/*screenshot*/}
                {desktopAndUp && (
                  <Stack align="center" justify="center" w="full">
                    <Image
                      alt="Home screen of the Android app"
                      maxW="400px"
                      src={`/images/screens/ios_screen-${colorMode}.png`}
                    />
                  </Stack>
                )}

                {/*badges*/}
                <Wrap
                  align="center"
                  justify="center"
                  spacing={DEFAULT_GAP}
                  w="full"
                >
                  {/*play store*/}
                  <WrapItem>
                    <StoreBadge
                      airaLabel="Play Store badge"
                      href=""
                      src="/images/store_badges/play_store_badge.png"
                    />
                  </WrapItem>

                  {/*f-droid*/}
                  <WrapItem>
                    <StoreBadge
                      airaLabel="F-Droid badge"
                      href=""
                      src="/images/store_badges/fdroid_badge.png"
                    />
                  </WrapItem>

                  {/*direct download*/}
                  <WrapItem>
                    <StoreBadge
                      airaLabel="Direct download badge"
                      href=""
                      src="/images/store_badges/apk_badge.png"
                    />
                  </WrapItem>
                </Wrap>
              </HStack>
            ),
            title: 'Android',
          },
          {
            content: (
              <HStack justify="space-evenly" spacing={DEFAULT_GAP - 2} w="full">
                {/*screenshot*/}
                {desktopAndUp && (
                  <Stack align="center" justify="center" w="full">
                    <Image
                      alt="Home screen of the iOS app"
                      maxW="400px"
                      src={`/images/screens/ios_screen-${colorMode}.png`}
                    />
                  </Stack>
                )}

                {/*badge*/}
                <Wrap
                  align="center"
                  justify="center"
                  spacing={DEFAULT_GAP - 2}
                  w="full"
                >
                  <WrapItem>
                    <StoreBadge
                      airaLabel="App Store badge"
                      href=""
                      src={`/images/store_badges/app_store_badge-${colorMode}.svg`}
                    />
                  </WrapItem>
                </Wrap>
              </HStack>
            ),
            title: 'iOS',
          },
        ]}
      />
    </Section>
  );
};

export default DownloadSection;
