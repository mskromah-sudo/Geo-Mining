import React from 'react';
import { Leaf, Users, Award, Shield, HeartHandshake } from 'lucide-react';
import { ValueCard } from '../types';

const values: ValueCard[] = [
  {
    title: 'Environmental Stewardship',
    description:
      'Protecting land, water, and ecosystems through responsible practices.',
    icon: Leaf,
  },
  {
    title: 'Community Partnership',
    description:
      'Working collaboratively with host communities to build shared value.',
    icon: Users,
  },
  {
    title: 'Technical Excellence',
    description:
      'Delivering high-quality, professional services across all operations.',
    icon: Award,
  },
  {
    title: 'Integrity & Transparency',
    description:
      'Operating ethically and responsibly in all business dealings.',
    icon: Shield,
  },
  {
    title: 'Local Empowerment',
    description:
      'Building local skills, employment, and capacity in our regions.',
    icon: HeartHandshake,
  },
];

const PurposeValues: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20" id="sustainability">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Purpose Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-3">
              Our Purpose
            </h2>
            <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-8 leading-tight">
              To responsibly develop{' '}
              <span className="font-semibold border-b-2 border-amber-500 pb-1">
                mineral resources
              </span>{' '}
              in Liberia and West Africa.
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Our mission is to protect the environment, empower communities,
                and contribute to long-term national and regional development
                while delivering value.
              </p>
              <p>
                Geo Mining & Environmental Consultancy places sustainability and
                community engagement at the center of its operations. We are
                committed to environmental protection, compliance with national
                standards, and creating local employment opportunities.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-full z-0"></div>
            <img
              src="https://picsum.photos/800/600?grayscale"
              alt="Community Engagement"
              className="relative z-10 w-full rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-6 right-6 z-20 bg-white p-4 shadow-lg border-l-4 border-amber-500 hidden md:block">
              <p className="text-slate-900 font-bold text-sm">Sustainability</p>
              <p className="text-slate-500 text-xs">
                At the center of operations
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-3">
              Our Values
            </h2>
            <h3 className="text-3xl font-light text-slate-900">
              Core Principles Guiding Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-amber-500 transition-all duration-300 group rounded-sm flex flex-col items-center text-center h-full"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                  <value.icon
                    className="text-slate-600 group-hover:text-white transition-colors"
                    size={24}
                  />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                  {value.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeValues;
