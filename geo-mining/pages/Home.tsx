import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Operations from '../components/Operations';
import { Globe, Target, Briefcase, CheckCircle2 } from 'lucide-react';
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
          About The Group
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Geo Mining & Environmental Consultancy is a Liberian-based mining and
          environmental services group providing integrated geological,
          environmental, and strategic support to mining projects across Liberia
          and the wider West African region. Headquartered in Liberia, the
          company serves as the parent and holding entity overseeing the Group’s
          subsidiaries and setting governance, environmental, and operational
          standards.
        </p>
        <p className="text-slate-600 leading-relaxed">
          With a strong focus on responsible resource development, Geo Mining &
          Environmental Consultancy delivers technical excellence while ensuring
          compliance with national regulations and international best practices.
        </p>
      </section>

      {/* Who We Are & What We Do */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-500 rounded-sm text-slate-900">
                <Globe size={20} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Who We Are</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Geo Mining & Environmental Consultancy provides leadership,
              technical oversight, and environmental governance across the
              Group. The company plays a central role in guiding mining projects
              from early-stage assessment through development and production,
              ensuring that environmental protection, community engagement, and
              sustainability are embedded in every project.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-500 rounded-sm text-slate-900">
                <Briefcase size={20} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">What We Do</h3>
            </div>
            <ul className="space-y-4 text-slate-700">
              {[
                'Geological consultancy and feasibility studies',
                'Environmental and Social Impact Assessments (ESIA)',
                'Regulatory compliance with the Liberia EPA & Ministry of Mines',
                'ESG policy development and implementation',
                'Community engagement and stakeholder management',
                'Risk management and project oversight',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-amber-600 shrink-0 mt-1"
                    size={18}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Operations / Group Structure (Imported) */}
      <div id="structure" className="scroll-mt-24">
        <Operations />
      </div>

      {/* Purpose & Values */}
      <section
        id="values"
        className="py-20 bg-slate-900 text-white scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-3">
              Core Principles
            </h2>
            <h3 className="text-3xl font-light mb-6">Our Purpose & Values</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              To responsibly develop mineral resources in Liberia and West
              Africa while protecting the environment, empowering communities,
              and contributing to sustainable economic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'Environmental Stewardship',
              'Integrity & Transparency',
              'Technical Excellence',
              'Community Partnership',
              'Local Empowerment',
            ].map((val, i) => (
              <div
                key={i}
                className="bg-slate-800 p-6 rounded-sm border-t-4 border-amber-500 hover:bg-slate-700 transition-colors"
              >
                <Target className="text-amber-500 mb-4" size={24} />
                <h4 className="font-bold text-lg">{val}</h4>
              </div>
            ))}
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
