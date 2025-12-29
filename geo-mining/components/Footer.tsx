import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Send,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <footer
      className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-[#2d5a27]"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Logo className="w-16 h-16 shadow-lg" />
              <div className="flex flex-col">
                <h3 className="text-lg font-black tracking-tighter">
                  GeoMining
                </h3>
                <span className="text-[8px] text-slate-400 uppercase tracking-widest">
                  Consultancy
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A specialized consultancy bridging geology, mining, and environmental science.
              Guided by Science, Grounded in Sustainability.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-[#2d5a27] transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-[#2d5a27] transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-[#2d5a27] transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-wider text-xs mb-6">
              The Group
            </h4>
            <ul className="space-y-3 text-sm text-slate-300 font-medium">
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-amber-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/subsidiaries"
                  className="hover:text-amber-500 transition-colors"
                >
                  Subsidiaries
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-amber-500 transition-colors"
                >
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/sustainability"
                  className="hover:text-amber-500 transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  to="/governance"
                  className="hover:text-amber-500 transition-colors"
                >
                  Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-wider text-xs mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-300 font-medium">
              <li>
                <Link
                  to="/projects-services"
                  className="hover:text-amber-500 transition-colors"
                >
                  Geological Consultancy
                </Link>
              </li>
              <li>
                <Link
                  to="/projects-services"
                  className="hover:text-amber-500 transition-colors"
                >
                  Mining Operations
                </Link>
              </li>
              <li>
                <Link
                  to="/projects-services"
                  className="hover:text-amber-500 transition-colors"
                >
                  Environmental Impact
                </Link>
              </li>
              <li>
                <Link
                  to="/projects-services"
                  className="hover:text-amber-500 transition-colors"
                >
                  Resource Exploration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Quick Form */}
          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-wider text-xs mb-6">
              Direct Contact
            </h4>
            <ul className="space-y-4 text-sm text-slate-300 mb-8">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#2d5a27] mt-0.5 shrink-0" />
                <span>
                  Monrovia, Liberia
                  <br />
                  West Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#2d5a27] shrink-0" />
                <span>+231 77 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#2d5a27] shrink-0" />
                <a
                  href="mailto:info@geominingconsult.com"
                  className="hover:text-amber-500 break-all"
                >
                  info@geominingconsult.com
                </a>
              </li>
            </ul>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-800">
              <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Send size={12} className="text-amber-500" />
                Quick Inquiry
              </h5>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-slate-900 border border-slate-700 text-white text-xs px-3 py-2.5 rounded-md focus:outline-none focus:border-amber-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-slate-900 border border-slate-700 text-white text-xs px-3 py-2.5 rounded-md focus:outline-none focus:border-amber-500 transition-colors"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={2}
                  className="w-full bg-slate-900 border border-slate-700 text-white text-xs px-3 py-2.5 rounded-md focus:outline-none focus:border-amber-500 transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2.5 px-4 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all ${submitted
                    ? 'bg-green-600 text-white'
                    : 'bg-amber-500 text-slate-900 hover:bg-white'
                    } disabled:opacity-50`}
                >
                  {isSubmitting
                    ? 'Sending...'
                    : submitted
                      ? 'Message Sent'
                      : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
          <p>
            &copy; {new Date().getFullYear()} GeoMining and Environmental
            Consultancy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
