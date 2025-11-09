import React from 'react';
// import { BreadCrumb } from '../components/BreadCrumb';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PiggeryContent } from '../components/PiggeryContent';

const Piggery: React.FC = () => {
  return (
    <div>
      <Header />
      <PiggeryContent />
      <Footer />
    </div>
  );
};

export default Piggery;