
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-full h-[600px] md:h-[750px] bg-slate-900 overflow-hidden" id="about">
      {/* Background Image using <img> for better path reliability */}
      <img 
        src="./hero-background.jpg" 
        alt="GEO Mining Operations" 
        onLoad={() => setImageLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover object-right md:object-center transition-all duration-1000 ${
          imageLoaded ? 'opacity-80 scale-100 blur-0' : 'opacity-0 scale-110 blur-xl'
        }`}
      />
      
      {/* Fallback pattern if image fails */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Sophisticated Corporate Overlay */}
      {/* This gradient is designed to be darker on the left for text readability and transparent on the right to show the trucks */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-3 py-2 px-4 mb-8 bg-[#2d5a27] text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm shadow-2xl">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            About The Consultancy
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-8 drop-shadow-2xl">
            Advancing Responsible <br/>
            <strong className="font-extrabold text-amber-400 uppercase tracking-tighter">Mineral Development</strong>
          </h1>
          
          <div className="max-w-xl border-l-4 border-amber-500 pl-8 py-3 bg-black/20 backdrop-blur-sm">
            <p className="text-lg md:text-xl text-slate-100 font-medium leading-relaxed">
              Geo Mining & Environmental Consultancy is a Liberian-based group committed to the responsible development of mineral resources across West Africa.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-5">
            <a 
              href="#contact" 
              className="bg-amber-500 text-slate-900 px-12 py-5 font-black text-xs uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_20px_50px_rgba(245,158,11,0.3)]"
            >
              Partner With Us
            </a>
            <a 
              href="#overview" 
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-12 py-5 font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all transform hover:-translate-y-1"
            >
              Our Vision
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-transparent to-transparent z-30" />
      
      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-8 hidden md:block animate-bounce opacity-30 z-30">
        <div className="w-px h-16 bg-white"></div>
      </div>
    </div>
  );
};

export default Hero;
