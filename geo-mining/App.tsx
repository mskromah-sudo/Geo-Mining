import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  ScrollRestoration,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Subsidiaries from './pages/Subsidiaries';
import Sustainability from './pages/Sustainability';
import Governance from './pages/Governance';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import ClientPortal from './pages/ClientPortal';
import Careers from './pages/Careers';
import StoneCrestResource from './pages/StoneCrestResource';
import StoneCrestMining from './pages/StoneCrestMining';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const ScrollToTop = () => {
  const { pathname } = window.location;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<Home />} />
            <Route path="/subsidiaries" element={<Subsidiaries />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/projects-services" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/careers" element={<Careers />} />
            {/* Subsidiary Pages */}
            <Route
              path="/subsidiaries/stonecrest-resource"
              element={<StoneCrestResource />}
            />
            <Route
              path="/subsidiaries/stonecrest-mining"
              element={<StoneCrestMining />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
