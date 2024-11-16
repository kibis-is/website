import {
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useColorMode } from '@docusaurus/theme-common';
import { translate } from '@docusaurus/Translate';
import { type FC, useEffect, useState } from 'react';

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
import {
  APK_DIRECT_DOWNLOAD_LINK,
  CHROME_STORE_LINK,
  DEFAULT_GAP,
  PLAY_STORE_LINK,
} from '@site/src/constants';

// enums
import { PlatformEnum } from '@site/src/enums';

// hooks
import useDefaultTextColor from '@site/src/hooks/useDefaultTextColor';
import useDesktopAndUp from '@site/src/hooks/useDesktopAndUp';
import usePrimaryColor from '@site/src/hooks/usePrimaryColor';

// types
import type { IDefaultSectionProps } from '@site/src/types';

// utils
import checkPlatform from '@site/src/utils/checkPlatform';

const DownloadSection: FC<IDefaultSectionProps> = ({ variant }) => {
  const { colorMode } = useColorMode();
  // hooks
  const defaultTextColor = useDefaultTextColor();
  const desktopAndUp = useDesktopAndUp();
  const primaryColor = usePrimaryColor();
  // states
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const platform = checkPlatform();
    let _index = 0;

    switch (platform) {
      case PlatformEnum.Android:
        _index = 1;
        break;
      case PlatformEnum.IOS:
        _index = 2;
        break;
      case PlatformEnum.Web:
      default:
        break;
    }

    setIndex(_index);
  }, []);

  return (
    <Section
      id="download"
      title={translate({ id: 'title.download' })}
      variant={variant}
    >
      <PillTabs
        defaultIndex={index}
        tabs={[
          // web
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

                <VStack spacing={DEFAULT_GAP * 2} w="full">
                  <Heading color={defaultTextColor} textAlign="center" w="full">
                    {translate({ id: 'heading.webDownload' })}
                  </Heading>

                  <Wrap
                    align="center"
                    flexGrow={1}
                    justify="center"
                    spacing={DEFAULT_GAP}
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
                </VStack>
              </HStack>
            ),
            title: 'Web',
          },
          // android
          {
            content: (
              <HStack justify="space-evenly" spacing={DEFAULT_GAP} w="full">
                {/*screenshot*/}
                {desktopAndUp && (
                  <Stack align="center" justify="center" w="full">
                    <Image
                      alt="Home screen of the Android app"
                      maxW="400px"
                      src={`/images/screens/android_screen-${colorMode}.png`}
                    />
                  </Stack>
                )}

                <VStack spacing={DEFAULT_GAP * 2} w="full">
                  <Heading color={defaultTextColor} textAlign="center" w="full">
                    {translate({ id: 'heading.androidDownload' })}
                  </Heading>

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
                        href={PLAY_STORE_LINK}
                        src="/images/store_badges/play_store_badge.png"
                        type="beta"
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
                        href={APK_DIRECT_DOWNLOAD_LINK}
                        src="/images/store_badges/apk_badge.png"
                        type="beta"
                      />
                    </WrapItem>
                  </Wrap>

                  <Text color={defaultTextColor} textAlign="center" w="full">
                    {translate(
                      {
                        id: 'caption.troubleInstalling',
                      },
                      {
                        link: (
                          <Link
                            color={primaryColor}
                            href="/android/getting-started"
                          >
                            {translate({ id: 'caption.here' })}
                          </Link>
                        ),
                      }
                    )}
                  </Text>
                </VStack>
              </HStack>
            ),
            title: 'Android',
          },
          // ios
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

                <VStack spacing={DEFAULT_GAP * 2} w="full">
                  <Heading color={defaultTextColor} textAlign="center" w="full">
                    {translate({ id: 'heading.iOSDownload' })}
                  </Heading>

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
                </VStack>
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
