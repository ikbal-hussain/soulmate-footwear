import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import  ProductGrid  from './components/ProductGrid';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <ProductGrid/>
      <Footer />
    </div>
  );
};

export default App;
