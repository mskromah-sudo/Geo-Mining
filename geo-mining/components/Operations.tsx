import React from 'react';
import { Briefcase } from 'lucide-react';
import { Logo } from './Logo';

const Operations: React.FC = () => {
  return (
    <section id="structure" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-3">Group Structure</h2>
          <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
            An Integrated Mining Value Chain
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Geo Mining & Environmental Consultancy operates as a parent holding and strategic company, overseeing two specialized subsidiaries that together deliver integrated solutions from exploration to production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Parent Company */}
          <div className="bg-slate-900 text-white p-8 rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Briefcase size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 p-1">
                 <Logo className="w-full h-full" />
              </div>
              <h4 className="text-xl font-bold mb-2">Geo Mining & Environmental Consultancy</h4>
              <p className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-6">Parent Company</p>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Provides strategic leadership, technical oversight, and environmental governance. Serves as the foundation for all subsidiary operations.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▪</span> Geological consultancy & Feasibility</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▪</span> Environmental & Social Impact (ESIA)</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▪</span> Regulatory Compliance (EPA)</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▪</span> ESG Policy & Community Relations</li>
              </ul>
            </div>
          </div>

          {/* Subsidiary 1: StoneCrest Resource Limited */}
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm relative overflow-hidden group hover:border-amber-500 transition-colors">
            <div className="relative z-10">
              <div className="h-16 mb-6 flex items-center">
                 <img 
                   src="https://placehold.co/200x200/png?text=Resource+Logo" 
                   alt="StoneCrest Resource Limited Logo" 
                   className="max-h-full max-w-full object-contain"
                 />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">StoneCrest Resource Limited</h4>
              <p className="text-amber-600 text-xs font-bold uppercase tracking-wider mb-6">Exploration & Resource Development</p>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Focuses on identifying, evaluating, and advancing mineral resources through early-stage development and geological surveys.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▪</span> Mineral exploration & surveys</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▪</span> Mapping, sampling & data analysis</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▪</span> Resource estimation</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▪</span> Early project development</li>
              </ul>
            </div>
          </div>

          {/* Subsidiary 2: StoneCrest Mining Corporation */}
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm relative overflow-hidden group hover:border-amber-500 transition-colors">
            <div className="relative z-10">
               <div className="h-16 mb-6 flex items-center">
                 <img 
                   src="https://placehold.co/300x200/png?text=Mining+Logo" 
                   alt="StoneCrest Mining Corporation Logo" 
                   className="max-h-full max-w-full object-contain"
                 />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">StoneCrest Mining Corporation</h4>
              <p className="text-amber-600 text-xs font-bold uppercase tracking-wider mb-6">Mining Operations & Production</p>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Responsible for mine development and production, translating exploration success into operational projects safely and responsibly.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▪</span> Mine development & planning</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▪</span> Mining & processing operations</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▪</span> HSE management</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▪</span> Site rehabilitation & closure</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Operations;