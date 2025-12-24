import React, { useState } from 'react';
import {
  Lock,
  BarChart3,
  Activity,
  FileText,
  MessageSquare,
  Download,
  Package,
  Shield,
  CheckCircle2,
  Mail,
  Phone,
} from 'lucide-react';

const ClientPortal: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would be implemented here
    console.log('Login attempt:', { email, rememberMe });
  };

  const portalFeatures = [
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      description:
        'Access real-time project metrics, production data, and key performance indicators with customizable views.',
    },
    {
      icon: Activity,
      title: 'Real-Time Monitoring',
      description:
        'Monitor equipment status, ore grade, and process parameters with instant alerts and notifications.',
    },
    {
      icon: FileText,
      title: 'Document Sharing',
      description:
        'Access reports, schedules, technical manuals, and project documentation in a centralized repository.',
    },
    {
      icon: MessageSquare,
      title: 'Communication Tools',
      description:
        'Support ticketing and issue tracking system for quick resolution of queries and concerns.',
    },
    {
      icon: Download,
      title: 'Custom Reporting',
      description:
        'Generate and export custom reports in CSV or PDF format with historical data and trend analysis.',
    },
    {
      icon: Package,
      title: 'Asset Management',
      description:
        'View asset inventories, maintenance schedules, and spare parts status for complete transparency.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#2d6130] to-[#1a3d1c] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 mb-6 bg-white/10 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest rounded-sm">
            <Shield size={14} className="text-amber-400" />
            Secure Access Portal
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Client{' '}
            <strong className="font-extrabold text-amber-400">Portal</strong>
          </h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed">
            Access your project data, reports, and real-time monitoring tools in
            one secure location
          </p>
        </div>
      </div>

      {/* Login Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Login Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-sm shadow-2xl border-t-4 border-[#2d6130]">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#2d6130] rounded-sm">
                  <Lock className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Secure Login
                </h2>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-sm focus:border-[#2d6130] focus:outline-none transition-colors text-slate-900"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-sm focus:border-[#2d6130] focus:outline-none transition-colors text-slate-900"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 border-2 border-slate-300 rounded text-[#2d6130] focus:ring-[#2d6130]"
                    />
                    <span className="text-sm text-slate-600">Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-sm font-bold text-[#2d6130] hover:text-amber-600 transition-colors"
                  >
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2d6130] text-white py-4 px-6 font-bold uppercase tracking-widest hover:bg-[#1a3d1c] transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  Access Portal
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-200 text-center">
                <p className="text-sm text-slate-600">
                  Don't have access?{' '}
                  <a
                    href="#contact"
                    className="font-bold text-[#2d6130] hover:text-amber-600 transition-colors"
                  >
                    Contact Support
                  </a>
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-3xl font-light text-slate-900 mb-6">
                Why Use Our <strong className="font-bold">Portal?</strong>
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our client portal provides 24/7 access to critical project
                information, enabling you to make informed decisions quickly and
                efficiently.
              </p>

              <div className="space-y-4">
                {[
                  'Real-time access to project data and metrics',
                  'Secure document storage and sharing',
                  'Instant notifications and alerts',
                  'Comprehensive reporting and analytics',
                  'Direct communication with project teams',
                  'Mobile-responsive design for access anywhere',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#2d6130] shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-3">
              Portal Features
            </h2>
            <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              Everything You Need in One Place
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Access comprehensive tools and data to manage your mining projects
              effectively and transparently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-sm shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#2d6130] group hover:-translate-y-1"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-[#2d6130] to-[#1a3d1c] rounded-sm shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="text-amber-400" size={32} />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h3 className="text-3xl font-light text-slate-900 mb-6">
            Need <strong className="font-bold">Assistance?</strong>
          </h3>
          <p className="text-slate-600 mb-12 leading-relaxed">
            Our support team is available to help you with portal access,
            technical issues, or any questions about your projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-sm border-2 border-slate-200 hover:border-[#2d6130] transition-colors">
              <Mail className="text-[#2d6130] mx-auto mb-4" size={32} />
              <h4 className="font-bold text-slate-900 mb-2">Email Support</h4>
              <a
                href="mailto:portal@geomining.com"
                className="text-[#2d6130] hover:text-amber-600 transition-colors font-medium"
              >
                portal@geomining.com
              </a>
            </div>

            <div className="bg-slate-50 p-8 rounded-sm border-2 border-slate-200 hover:border-[#2d6130] transition-colors">
              <Phone className="text-[#2d6130] mx-auto mb-4" size={32} />
              <h4 className="font-bold text-slate-900 mb-2">Phone Support</h4>
              <a
                href="tel:+231XXXXXXXX"
                className="text-[#2d6130] hover:text-amber-600 transition-colors font-medium"
              >
                +231 XXX-XXXX
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientPortal;
