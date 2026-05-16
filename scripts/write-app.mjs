import { writeFileSync } from 'fs';

writeFileSync(
  new URL('../src/App.jsx', import.meta.url),
  `import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Consultation from './pages/Consultation';
import Services from './pages/Services';
import Contact from './pages/Contact';
import logoPdf from './assets/images/RVTMPL LOGO_page-0001.jpg';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1400);
    return () => clearInterval(t);
  }, []);

  return (
    <BrowserRouter>
      <>
        {showSplash && (
          <div className="splash-section">
            <motion.div className="splash-content">
              <img src={logoPdf} alt="RV Testing Machines" className="splash-logo" />
              <div className="splash-title">RV TESTING MACHINES</motion.div>
            </motion.div>
          </motion.div>
        )}

        <motion.div className="site-wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </motion.div>
      </>
    </BrowserRouter>
  );
}

export default App;
`.replace(/<\/?motion\.div/g, (m) => m.replace('motion.', ''))
);
