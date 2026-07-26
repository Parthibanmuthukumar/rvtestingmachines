import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Consultation from './pages/Consultation';
import Services from './pages/Services';
import Contact from './pages/Contact';

import { SeoManager } from './components/SEO/SeoManager';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SeoManager />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
