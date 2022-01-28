import React from 'react';
import clsx from 'clsx';
import styles from './landing.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";
import ExternalArrow from '../../static/img/external-arrow.svg'

const Guides = [
  {
    title: 'About anetaBTC',
    link:  '../docs/intro',
    description: (
      <>
        Learn about anetaBTC, an on-chain wrapped protocol on Ergo and Cardano. Learn about our mission and key principles.
      </>
    ),
  },
  {
    title: 'FAQ',
    link: '../docs/intro',
    description: (
      <>
        Learn about our protocol, tokenomics, LISO, community, and whitepaper.
      </>
    ),
  },
  {
    title: 'Protocol overview',
    link: '../docs/intro',
    description: (
      <>
        Learn about all aspects of our architecture including minting, redeeming, burning, and transferring.
      </>
    ),
  },
];

function Guide({title, description, link}) {
  return (
    <Link isNavLink={true} to={link} className={clsx('col col--4', styles.guide)}>
      <div className={clsx('text--center', 'padding-horiz--md', styles.wrapper)}>
        <ExternalArrow className={styles.arrow} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageGuides() {
  return (
    <section style = {{marginTop: 25}} className={styles.guides}>
        {Guides.map((props, idx) => (
            <Guide key={idx} {...props} />
        ))}
    </section>
  );
}