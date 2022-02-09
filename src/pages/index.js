import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import LandingSocials from '../components/LandingSocials'
import Cards from '../pages/HomepageGuides';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Cards/>
        <h2 style={{display: 'flex', justifyContent: 'center'}}>Join our community!</h2>
        <LandingSocials/>
      </main>
    </Layout>
  );
}
