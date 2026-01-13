import React from 'react';
import './App.css';

import PromoBanner from './components/PromoBanner';
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <PromoBanner/>
    <Header/>
    <CategoryTabs/>
    <ProductGrid/>
    <Footer/>
    </>
    
    
  );
}

export default App;
