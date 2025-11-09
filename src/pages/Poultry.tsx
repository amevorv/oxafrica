import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PoultryContent } from '../components/PoultryContent';

const Poultry: React.FC = () => {
  return (
    <div>
      <Header />
      <PoultryContent />
      <Footer />
    </div>
  );
};

export default Poultry;