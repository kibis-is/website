import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { FC } from 'react';

import Layout from '@theme/Layout';

// components
import ConceptsSection from '@site/src/components/ConceptsSection';
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
        <FeaturesSection variant="accent" />

        <ConceptsSection variant="primary" />
      </Main>
    </Layout>
  );
};

export default IndexPage;
