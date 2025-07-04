import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loader } from './components/Loader';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { Documentation } from './pages/Documentation';
import { Contact } from './pages/Contact';
import { ContactUs } from './pages/ContactUs';
import { TermsConditions } from './pages/TermsConditions';
import { RefundPolicy } from './pages/RefundPolicy';
import { Checkout } from './pages/Checkout';
import { NotFound } from './pages/NotFound';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  // Determine if we're on GitHub Pages
  const isGitHubPages = window.location.hostname.includes('github.io');
  const basename = isGitHubPages ? '/VulcanGPT-Web' : '';

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        const swPath = isGitHubPages ? '/VulcanGPT-Web/service-worker.js' : '/service-worker.js';
        navigator.serviceWorker.register(swPath)
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isGitHubPages]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;