import React from 'react';
// import { BreadCrumb } from '../components/BreadCrumb';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
// import { HeroContainer } from '../components/HeroContainer';
import { LivestockContent } from '../components/LivestockContent';

const Livestock: React.FC = () => {
  return (
    <div>
      <Header />
      <LivestockContent />
      <Footer />
    </div>
  );
};

export default Livestock;