import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import {
  Pickaxe,
  Microscope,
  ClipboardCheck,
  Users,
  Search,
  HardHat,
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Projects: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const services = [
    {
      id: 'consultancy',
      title: 'Geological Consultancy',
      description:
        'Comprehensive geological studies, feasibility assessments, and resource estimation to guide project development.',
      icon: Search,
    },
    {
      id: 'exploration',
      title: 'Exploration Services',
      description:
        'Mineral exploration including mapping, sampling, data analysis, and technical reporting for new discoveries.',
      icon: Microscope,
    },
    {
      id: 'mining',
      title: 'Mining Operations',
      description:
        'End-to-end mine development, operational planning, and processing execution.',
      icon: Pickaxe,
    },
    {
      title: 'Environmental Impact (ESIA)',
      description:
        'Full Environmental and Social Impact Assessments ensuring regulatory compliance and sustainability.',
      icon: ClipboardCheck,
    },
    {
      title: 'Community Engagement',
      description:
        'Stakeholder management, Community Development Agreements (CDA), and social license to operate.',
      icon: Users,
    },
    {
      title: 'HSE Management',
      description:
        'Health, Safety, and Environmental management systems implementation and oversight.',
      icon: HardHat,
    },
  ];

  return (
    <div>
      <PageHeader
        title="Projects & Services"
        category="What We Do"
        subtitle="Delivering integrated solutions across the mining lifecycle, from exploration to rehabilitation."
        image="https://picsum.photos/1920/803?grayscale"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-light text-slate-900 mb-6">
              Our Expertise
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Geo Mining & Environmental Consultancy offers a full suite of
              services tailored to the West African mining sector. Our
              integrated approach ensures technical excellence at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className="bg-slate-50 p-8 rounded-sm border border-slate-100 hover:border-amber-500 hover:shadow-md transition-all group scroll-mt-24"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-amber-500 transition-colors">
                  <service.icon
                    className="text-slate-700 group-hover:text-slate-900 transition-colors"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Project Placeholder */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-3">
              Project Focus
            </h2>
            <h3 className="text-3xl font-light mb-6">Operational Excellence</h3>
            <p className="text-slate-300 leading-relaxed mb-8">
              Our subsidiaries are currently engaged in key projects across
              Nimba, Grand Bassa, and Cape Mount. We deploy advanced
              technologies and responsible practices to unlock value while
              preserving the environment.
            </p>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Gold and Iron Ore Production</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Rehabilitation & Closure Planning</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Local Workforce Development</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 relative">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-amber-500 rounded-sm z-0 hidden md:block"></div>
            <img
              src="https://picsum.photos/800/500?grayscale"
              alt="Mining Operation"
              className="relative z-10 rounded-sm shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
