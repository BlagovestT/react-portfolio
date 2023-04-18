import React from 'react';
import Layout from '../containers/Layout';
import About from '../containers/About';
import HeroCont from '../containers/Hero';
import Certificate from '../containers/Cerificate';
import Projects from '../containers/Projects';
import Contact from '../containers/Contact';

function Home() {
  return (
    <Layout>
      <HeroCont />
      <About />
      <Certificate />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default Home;
