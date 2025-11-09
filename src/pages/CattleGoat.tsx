import React from 'react';
import {Footer} from '../components/Footer';
import { Header } from '../components/Header';
import { CattleGoatContent } from '../components/CattleGoatContent';

const CattleGoat: React.FC = () => {
  return (
    <div>
      <Header />
      <CattleGoatContent />
      <Footer />
    </div>
  );
};

export default CattleGoat;

