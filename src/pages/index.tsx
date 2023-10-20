import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { FC } from 'react';

import Layout from '@theme/Layout';

// components
import FeatureSection from '@site/src/components/FeatureSection';
import Header from '@site/src/components/Header';

const IndexPage: FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.tagline}
      description="Description will go into a meta tag in <head />"
    >
      <Header />

      <main>
        <FeatureSection />
      </main>
    </Layout>
  );
};

export default IndexPage;
