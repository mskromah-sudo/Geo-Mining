import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Operations from '../components/Operations';
import { Globe, Target, Briefcase, CheckCircle2, Leaf } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div>
      <Hero />

      {/* Intro Section */}
      <section
        id="overview"
        className="py-20 max-w-4xl mx-auto px-4 md:px-8 text-center scroll-mt-24"
      >
        <h2 className="text-3xl font-light text-slate-900 mb-6">
          About Us
        </h2>
        <div className="space-y-6">
          <p className="text-lg text-slate-600 leading-relaxed">
            Geo-Mining and Environmental Consultancy Inc is a premier, multidisciplinary consultancy providing integrated solutions at the critical intersection of earth resources and environmental stewardship.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            We empower the mining, energy, infrastructure, and public sectors to navigate the complex challenges of responsible resource development.
          </p>
        </div>
      </section>

      {/* Mission & Motto Section */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-4">Our Mission</h3>
            <p className="text-2xl font-light text-slate-900 mb-8 italic">
              "To deliver technically excellent, socially responsible, and environmentally sound consulting services that de-risk projects, ensure regulatory compliance, and create sustainable value."
            </p>
            <div className="h-px w-20 bg-slate-900/20 mx-auto mb-8"></div>
            <h3 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-4">Our Motto</h3>
            <p className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
              Guided by Science, <span className="text-white">Grounded in Sustainability</span>
            </p>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-900 mb-4">Our Core Expertise</h2>
            <p className="text-slate-600">Deep geoscientific knowledge blended with robust environmental and engineering principles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-8 rounded-sm border-l-4 border-amber-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-900 rounded-sm text-amber-500">
                  <Globe size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">1. Geo-Mining Services</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                {[
                  'Exploration & Resource Estimation: Geological mapping, geophysical surveys, and modeling.',
                  'Mine Design & Planning: Feasibility studies, optimization, and geotechnical engineering.',
                  'Due Diligence & Technical Audits: Independent reviews for investors and lenders.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-amber-600 shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-sm border-l-4 border-[#2d5a27]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-900 rounded-sm text-[#2d5a27]">
                  <Leaf size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">2. Environmental & Sustainability</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                {[
                  'Environmental & Social Impact Assessment (ESIA)',
                  'Mine Closure & Rehabilitation Planning',
                  'Water & Waste Management (TSF design, characterization)',
                  'Licenses and Permits Application & Management',
                  'Compliance with local and international frameworks',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#2d5a27] shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-light mb-12 border-b border-slate-800 pb-6 uppercase tracking-widest text-amber-500">Our Differentiators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { title: 'Integrated Approach', desc: 'Geologists, engineers, and scientists collaborating from day one.' },
              { title: 'Risk-Focused', desc: 'Early identification and mitigation of technical and social risks.' },
              { title: 'Sustainability by Design', desc: 'Embedding circular economy and biodiversity into core plans.' },
              { title: 'Global Standards', desc: 'International best practices combined with local insight.' },
              { title: 'Technology-Driven', desc: 'Advanced GIS, 3D modeling, and remote sensing.' },
            ].map((diff, i) => (
              <div key={i} className="group">
                <h4 className="font-bold text-lg mb-3 group-hover:text-amber-500 transition-colors">{diff.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-light text-slate-900 mb-12">Who We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Mining & Exploration Companies',
              'Energy Developers (Oil & Gas, Renewables)',
              'Engineering & Construction Firms',
              'Financial Institutions & Legal Firms',
              'Government Agencies & Development Organizations',
            ].map((sector, i) => (
              <span key={i} className="bg-white border border-slate-200 px-6 py-3 rounded-full text-slate-700 font-medium shadow-sm hover:border-amber-500 transition-colors">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Operations / Group Structure (Imported) */}
      <div id="structure" className="scroll-mt-24">
        <Operations />
      </div>

      {/* Our Promise */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-block p-4 bg-amber-50 text-amber-600 rounded-full mb-6">
            <Target size={32} />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Our Promise</h2>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            "At Geo-Mining and Environmental Consultancy Inc we are more than consultants; we are partners in building a future where resource development and environmental integrity go hand in hand. We turn challenges into opportunities for sustainable growth."
          </p>
          <div className="mt-12">
            <a
              href="#contact"
              className="inline-block bg-slate-900 text-white px-12 py-5 font-black text-xs uppercase tracking-widest hover:bg-amber-500 hover:text-slate-900 transition-all transform hover:-translate-y-1"
            >
              Partner with us
            </a>
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section id="presence" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Our Regional Presence
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              With operations rooted in Liberia and experience across West
              Africa, Geo Mining & Environmental Consultancy combines local
              insight with regional expertise to deliver solutions tailored to
              the realities of African mining environments.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://picsum.photos/800/400?grayscale&blur=1"
              alt="Regional Map"
              className="w-full h-auto rounded-sm shadow-lg grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
