import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { FC } from 'react';

import Layout from '@theme/Layout';

// components
import ConceptsSection from '@site/src/components/ConceptsSection';
import DownloadSection from '@site/src/components/DownloadSection';
import FeaturesSection from '@site/src/components/FeaturesSection';
import Header from '@site/src/components/Header';
import Main from '@site/src/components/Main';

const IndexPage: FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.tagline}
      description="Description will go into a meta tag in <head />"
    >
      <Header />

      <Main>
        <ConceptsSection variant="primary" />

        <FeaturesSection variant="accent" />

        <DownloadSection variant="primary" />
      </Main>
    </Layout>
  );
};

export default IndexPage;
