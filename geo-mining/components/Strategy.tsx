import React from 'react';
import { ClipboardList, Search, Hammer, ArrowRight } from 'lucide-react';

const Strategy: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-3">Business Model</h2>
          <h3 className="text-3xl font-light text-white mb-6">Our Integrated Approach</h3>
          <p className="text-slate-400">
            The Group’s structure allows for a seamless and efficient approach to mining development, reducing project risk and enhancing regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Step 1 */}
          <div className="relative group">
            <div className="flex flex-col items-center text-center p-8 rounded bg-slate-800/50 hover:bg-slate-800 transition-colors border border-transparent hover:border-amber-500/30 h-full">
              <div className="text-amber-500 text-4xl font-bold mb-4 opacity-20 group-hover:opacity-100 transition-opacity">01</div>
              <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/10 z-10">
                <ClipboardList className="text-white" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Assessment & Planning</h4>
              <p className="text-amber-500 text-xs uppercase tracking-wider mb-4">Geo Mining & Environmental Consultancy</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Environmental and geological studies, ensuring regulatory compliance and foundational planning.
              </p>
            </div>
             {/* Arrow Desktop */}
             <div className="hidden md:block absolute top-1/2 -right-4 text-slate-700 transform -translate-y-1/2 z-0">
               <ArrowRight size={32} />
             </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="flex flex-col items-center text-center p-8 rounded bg-slate-800/50 hover:bg-slate-800 transition-colors border border-transparent hover:border-amber-500/30 h-full">
               <div className="text-amber-500 text-4xl font-bold mb-4 opacity-20 group-hover:opacity-100 transition-opacity">02</div>
              <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/10 z-10">
                <Search className="text-white" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Exploration & Resource</h4>
              <p className="text-amber-500 text-xs uppercase tracking-wider mb-4">StoneCrest Resource Limited</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Mineral discovery, evaluation, and resource definition to identify viable opportunities.
              </p>
            </div>
            {/* Arrow Desktop */}
             <div className="hidden md:block absolute top-1/2 -right-4 text-slate-700 transform -translate-y-1/2 z-0">
               <ArrowRight size={32} />
             </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="flex flex-col items-center text-center p-8 rounded bg-slate-800/50 hover:bg-slate-800 transition-colors border border-transparent hover:border-amber-500/30 h-full">
               <div className="text-amber-500 text-4xl font-bold mb-4 opacity-20 group-hover:opacity-100 transition-opacity">03</div>
              <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/10 z-10">
                <Hammer className="text-white" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Development & Production</h4>
              <p className="text-amber-500 text-xs uppercase tracking-wider mb-4">StoneCrest Mining Corporation</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Mine development and operational execution, translating exploration into production.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-20 bg-amber-500 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Partnership Opportunities</h3>
            <p className="text-slate-800">For consultancy services or general inquiries.</p>
          </div>
          <button className="bg-slate-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-colors rounded-sm whitespace-nowrap">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Strategy;