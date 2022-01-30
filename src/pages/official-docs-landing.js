import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import LandingSocials from '../components/LandingSocials'
import Cards from '../pages/landing.js';

function DocumentationHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="docs_header">Welcome to anetaBTC Documentation!</h1>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
      <DocumentationHeader />
        <Cards/>
        <h2 style={{display: 'flex', justifyContent: 'center'}}>Join our community!</h2>
        <LandingSocials/>
      </main>
    </Layout>
  );
}
