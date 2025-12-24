import React, { useState } from 'react';
import { Menu, X, MapPin, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/about-us',
    children: [
      { name: 'Overview', href: '/about-us#overview' },
      { name: 'Vision, Mission & Values', href: '/about-us#values' },
      { name: 'Group Structure', href: '/about-us#structure' },
      { name: 'Regional Presence', href: '/about-us#presence' },
    ],
  },
  {
    name: 'Subsidiaries',
    href: '/subsidiaries',
    children: [
      {
        name: 'StoneCrest Resource Limited',
        href: '/subsidiaries#stonecrest-resource',
      },
      {
        name: 'StoneCrest Mining Corporation',
        href: '/subsidiaries#stonecrest-mining',
      },
    ],
  },
  {
    name: 'Sustainability',
    href: '/sustainability',
    children: [
      { name: 'Environmental Management', href: '/sustainability#environment' },
      {
        name: 'Community Development & CDA',
        href: '/sustainability#community',
      },
      { name: 'Health & Safety', href: '/sustainability#safety' },
      {
        name: 'Rehabilitation & Closure',
        href: '/sustainability#rehabilitation',
      },
    ],
  },
  {
    name: 'Projects',
    href: '/projects-services',
    children: [
      {
        name: 'Geological & Environmental Consultancy',
        href: '/projects-services#consultancy',
      },
      { name: 'Exploration Projects', href: '/projects-services#exploration' },
      { name: 'Mining Operations', href: '/projects-services#mining' },
    ],
  },
  { name: 'Gallery', href: '/gallery' },
  {
    name: 'Contact Us',
    href: '#contact',
  },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (
      path !== '/' &&
      (location.pathname === path || location.pathname.startsWith(path + '/'))
    )
      return true;
    return false;
  };

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg font-sans border-b border-slate-100">
      {/* Top Bar */}
      <div className="bg-[#2d5a27] text-white py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-100">
              <MapPin size={12} className="text-amber-400" />
              Liberia HQ
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="hidden sm:inline text-amber-400 font-medium">
              Guided by Science, Grounded in Sustainability
            </span>
          </div>
          <div className="hidden md:flex gap-6 text-slate-100">
            <Link
              to="/client-portal"
              className="hover:text-amber-400 transition-colors"
            >
              Client Portal
            </Link>
            <Link
              to="/careers"
              className="hover:text-amber-400 transition-colors"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-24 md:h-32">
            {/* Logo Section */}
            <Link
              to="/"
              className="flex-shrink-0 flex items-center gap-4 group"
            >
              <Logo className="w-16 h-16 md:w-24 md:h-24 shadow-xl transition-transform duration-500 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="text-[#2d5a27] font-black text-xl md:text-2xl leading-none tracking-tight">
                  GeoMining
                </span>
                <span className="text-slate-500 text-[8px] md:text-[9px] uppercase font-bold tracking-[0.2em] mt-2 max-w-[180px]">
                  AND ENVIRONMENTAL CONSULTANCY
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden xl:flex space-x-1 h-full items-center">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group h-full flex items-center"
                >
                  <Link
                    to={item.href}
                    className={`px-4 py-2 font-bold text-[10px] uppercase tracking-wider transition-all flex items-center gap-1.5 h-full ${
                      isActive(item.href)
                        ? 'text-[#2d5a27] border-b-4 border-[#2d5a27]'
                        : 'text-slate-600 hover:text-[#2d5a27]'
                    }`}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown size={12} className="opacity-40" />
                    )}
                  </Link>

                  {item.children && (
                    <div className="absolute top-full left-0 w-72 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border-t-4 border-[#2d5a27]">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#2d5a27] transition-colors border-b border-slate-50 last:border-0"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-900 hover:text-[#2d5a27] focus:outline-none p-3 bg-slate-50 rounded-full transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 shadow-2xl absolute w-full h-[calc(100vh-130px)] overflow-y-auto">
          <div className="px-6 pt-6 pb-24 space-y-2">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="border-b border-slate-50 last:border-0"
              >
                <div className="flex justify-between items-center py-1">
                  <Link
                    to={item.href}
                    className="block py-4 text-sm font-bold text-slate-900 uppercase tracking-tight hover:text-[#2d5a27] flex-grow"
                    onClick={() => !item.children && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="p-4 text-slate-400"
                    >
                      {openSubmenu === item.name ? (
                        <ChevronDown size={20} />
                      ) : (
                        <ChevronRight size={20} />
                      )}
                    </button>
                  )}
                </div>

                {item.children && openSubmenu === item.name && (
                  <div className="bg-slate-50 px-4 pb-4 mb-4 rounded-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block py-3.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-[#2d5a27] border-l-2 border-slate-200 pl-4 transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
