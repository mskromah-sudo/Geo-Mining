import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  ScrollRestoration,
  Navigate,
} from 'react-router-dom';
import { DesignProvider } from './contexts/DesignContext';
import PublicLayout from './components/PublicLayout';
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

// Admin Imports
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import PagesManager from './pages/admin/PagesManager';
import PageEditor from './pages/admin/PageEditor';
import NavigationManager from './pages/admin/NavigationManager';
import DesignCustomizer from './pages/admin/DesignCustomizer';
import MediaLibrary from './pages/admin/MediaLibrary';
import FormManager from './pages/admin/FormManager';
import CategoryManager from './pages/admin/CategoryManager';

const ScrollToTop = () => {
  const { pathname } = window.location;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DesignProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="pages" element={<PagesManager />} />
              <Route path="pages/new" element={<PageEditor />} />
              <Route path="pages/edit/:id" element={<PageEditor />} />
              <Route path="navigation" element={<NavigationManager />} />
              <Route path="design" element={<DesignCustomizer />} />
              <Route path="media" element={<MediaLibrary />} />
              <Route path="forms" element={<FormManager />} />
              <Route path="categories" element={<CategoryManager />} />
            </Route>

            {/* Public Routes */}
            <Route element={<PublicLayout />}>
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
            </Route>
          </Routes>
        </Router>
      </DesignProvider>
    </AuthProvider>
  );
};

export default App;
