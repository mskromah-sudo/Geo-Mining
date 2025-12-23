import React from 'react';
import { Globe, ShieldCheck, Layers, MapPin, ArrowUpRight } from 'lucide-react';
import { Metric } from '../types';

const metrics: Metric[] = [
  {
    value: 'Liberian',
    label: 'Owned & Operated',
    subLabel: 'Local Expertise, Global Standards',
    icon: MapPin,
  },
  {
    value: 'Regional',
    label: 'West African Focus',
    subLabel: 'Active across key jurisdictions',
    icon: Globe,
  },
  {
    value: 'Integrated',
    label: 'Mining Solutions',
    subLabel: 'Exploration to Production',
    icon: Layers,
  },
  {
    value: 'ESG',
    label: 'Best Practices',
    subLabel: 'Strong Sustainability Alignment',
    icon: ShieldCheck,
  },
];

const Snapshot: React.FC = () => {
  return (
    <section className="relative z-10 -mt-16 max-w-7xl mx-auto px-4 md:px-8 mb-20">
      <div className="bg-white shadow-xl rounded-sm overflow-hidden border-t-4 border-amber-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-8 group hover:bg-slate-50 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <metric.icon
                  className="text-slate-400 group-hover:text-amber-500 transition-colors w-8 h-8"
                  strokeWidth={1.5}
                />
                <ArrowUpRight className="text-slate-200 group-hover:text-amber-500 w-5 h-5 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {metric.value}
              </h3>
              <p className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-1">
                {metric.label}
              </p>
              <p className="text-sm text-slate-500">{metric.subLabel}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Intro Text Below Snapshot */}
      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light text-slate-900 mb-6">
          Our Commitment
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Through strong governance, technical excellence, and a deep
          understanding of local regulatory and community environments, Geo
          Mining & Environmental Consultancy delivers lasting value to
          governments, communities, and stakeholders.
        </p>
      </div>
    </section>
  );
};

export default Snapshot;
