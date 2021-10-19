import React from 'react';
import Hero from './components/hero/Hero';
import Promos from './components/promos/Promos';
import Footer from './components/footer/Footer';

const App = () => (
  <div className="content-wrapper">
    <Hero />
    <Promos />
    <Footer />
  </div>
);

export default App;
