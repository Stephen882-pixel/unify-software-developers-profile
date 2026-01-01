import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home'
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Uncomment as we create pages */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/careers" element={<Careers />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
