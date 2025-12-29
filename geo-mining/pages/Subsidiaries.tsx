import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { Layers } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import stmcLogo from '../images/Mining.jpg';
import scrlLogo from '../images/Resource.jpg';


const Subsidiaries: React.FC = () => {
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
      <PageHeader
        title="Our Subsidiaries"
        category="Group Structure"
        subtitle="Specialized subsidiaries delivering the complete mining value chain."
        image="https://picsum.photos/1920/800?grayscale"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-6">
            Our Operating Companies
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            GeoMining & Environmental Consultancy oversees two specialized
            subsidiaries, each focused on distinct but complementary areas of
            the mining value chain.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          {/* StoneCrest Resource Limited */}
          <div
            id="stonecrest-resource"
            className="flex flex-col md:flex-row gap-12 items-start border-l-4 border-amber-500 pl-6 md:pl-12 py-4 scroll-mt-24"
          >
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                {/* Logo Area - Replace src with actual file path */}
                <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-100 p-2">
                  <img
                    src={scrlLogo}
                    alt="StoneCrest Resource Limited Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    StoneCrest Resource Limited
                  </h3>
                  <span className="text-amber-600 font-bold uppercase text-xs tracking-wider">
                    Exploration & Resource Development
                  </span>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                StoneCrest Resource Limited is responsible for mineral
                exploration and early-stage resource development across Liberia
                and the West African region. The company focuses on identifying
                and advancing mineral opportunities through sound geological
                practices and responsible exploration methods.
              </p>
              <div className="bg-slate-50 p-6 rounded-sm border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                  Core Activities
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>{' '}
                    Geological mapping and mineral exploration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>{' '}
                    Sampling, data analysis, and interpretation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>{' '}
                    Resource estimation and technical reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>{' '}
                    Early project development and evaluation
                  </li>
                </ul>
              </div>
              <p className="text-sm text-slate-500 mt-4 italic">
                StoneCrest Resource Limited operates in strict alignment with
                the environmental, governance, and sustainability frameworks
                established by the parent company.
              </p>
              <div className="mt-8">
                <a
                  href="/subsidiaries/stonecrest-resource"
                  className="inline-block px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-sm hover:bg-amber-600 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* StoneCrest Mining Corporation */}
          <div
            id="stonecrest-mining"
            className="flex flex-col md:flex-row gap-12 items-start border-l-4 border-slate-900 pl-6 md:pl-12 py-4 scroll-mt-24"
          >
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                {/* Logo Area - Replace src with actual file path */}
                <div className="w-48 h-32 flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-100 p-2">
                  <img
                    src={stmcLogo}
                    alt="StoneCrest Mining Corporation Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    StoneCrest Mining Corporation
                  </h3>
                  <span className="text-amber-600 font-bold uppercase text-xs tracking-wider">
                    Mining Operations & Production
                  </span>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                StoneCrest Mining Corporation leads the Group’s mining and
                production activities. The company is responsible for developing
                and operating mining projects in a safe, efficient, and
                environmentally responsible manner.
              </p>
              <div className="bg-slate-50 p-6 rounded-sm border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                  Core Activities
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>{' '}
                    Mine development and operational planning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>{' '}
                    Mining and processing operations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>{' '}
                    Health, safety, and environmental management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>{' '}
                    Implementation of Environmental Management Plans
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>{' '}
                    Mine rehabilitation and closure planning
                  </li>
                </ul>
              </div>
              <p className="text-sm text-slate-500 mt-4 italic">
                StoneCrest Mining Corporation executes projects in full
                compliance with Liberian mining laws, community agreements, and
                ESG standards.
              </p>
              <div className="mt-8">
                <a
                  href="/subsidiaries/stonecrest-mining"
                  className="inline-block px-6 py-3 bg-slate-900 text-white font-bold rounded-sm hover:bg-slate-800 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Approach */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <Layers className="mx-auto text-amber-500 mb-6" size={48} />
          <h3 className="text-2xl font-bold mb-4">Integrated Approach</h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Together, the subsidiaries operate within a structured framework
            that ensures seamless project development from exploration to
            production while maintaining high environmental and social
            standards.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Subsidiaries;
