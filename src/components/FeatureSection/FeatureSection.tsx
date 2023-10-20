import React, { FC } from 'react';

// components
import Feature from './Feature';

// images
import easyToUseSvg from '@site/static/images/undraw_docusaurus_mountain.svg';
import focusOnWhatMatterSvg from '@site/static/images/undraw_docusaurus_tree.svg';
import poweredByReact from '@site/static/images/undraw_docusaurus_react.svg';

// styles
import styles from './styles.module.scss';

// types
import { IFeatureItem } from './types';

const FeatureSection: FC = () => {
  const features: IFeatureItem[] = [
    {
      title: 'Easy to Use',
      SvgComponent: easyToUseSvg,
      description: (
        <>
          Docusaurus was designed from the ground up to be easily installed and
          used to get your website up and running quickly.
        </>
      ),
    },
    {
      title: 'Focus on What Matters',
      SvgComponent: focusOnWhatMatterSvg,
      description: (
        <>
          Docusaurus lets you focus on your docs, and we&apos;ll do the chores.
          Go ahead and move your docs into the <code>docs</code> directory.
        </>
      ),
    },
    {
      title: 'Powered by React',
      SvgComponent: poweredByReact,
      description: (
        <>
          Extend or customize your website layout by reusing React. Docusaurus
          can be extended while reusing the same header and footer.
        </>
      ),
    },
  ];

  return (
    <section className={styles.feature__section}>
      <div className="container">
        <div className="row">
          {features.map(({ description, SvgComponent, title }, index) => (
            <Feature
              description={description}
              key={`feature-item-${index}`}
              SvgComponent={SvgComponent}
              title={title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
