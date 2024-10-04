import { ChakraProvider } from '@chakra-ui/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DocusaurusThemeLayout from '@theme/Layout';
import type { FC } from 'react';

// components
import ConceptsSection from '@site/src/components/ConceptsSection';
import DownloadSection from '@site/src/components/DownloadSection';
import FeaturesSection from '@site/src/components/FeaturesSection';
import Header from '@site/src/components/Header';
import Main from '@site/src/components/Main';

// containers
import ColorModeProvider from '@site/src/containers/ColorModeProvider';

// theme
import { config as themeConfig } from '@site/src/themes';

const IndexPage: FC = () => {
  const { siteConfig } = useDocusaurusContext();
  // misc
  const description = `Step into a world where your digital assets become more than just holdings - Welcome to Kibisis, your ultimate utility wallet tailored to harness the true potential of your AVM assets. Beyond just a wallet, Kibisis is your passport to a world where digital assets become powerful tools.`;

  return (
    <DocusaurusThemeLayout title={siteConfig.tagline} description={description}>
      <ChakraProvider theme={themeConfig}>
        <ColorModeProvider>
          <Header />

          <Main>
            <DownloadSection variant="primary" />

            <ConceptsSection variant="accent" />

            <FeaturesSection variant="primary" />
          </Main>
        </ColorModeProvider>
      </ChakraProvider>
    </DocusaurusThemeLayout>
  );
};

export default IndexPage;
