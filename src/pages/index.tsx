import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { FC } from 'react';

import Layout from '@theme/Layout';

// components
import FeatureSection from '@site/src/components/FeatureSection';
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
        <FeatureSection />
      </Main>
    </Layout>
  );
};

export default IndexPage;
