import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Quality from './pages/Quality';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Farms from './pages/Farms';
import Products from './pages/Products';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        {/* NavBar */}
        <div className="z-50">
          <NavBar />
        </div>

        {/* Main Content */}
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/farms" element={<Farms />} />
            <Route
              path="/products"
              element={
                <ParallaxProvider>
                  <Products />
                </ParallaxProvider>
              }
            />
          </Routes>
        </Suspense>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
