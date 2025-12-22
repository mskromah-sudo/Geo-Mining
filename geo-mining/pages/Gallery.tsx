
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Maximize2, X, Filter, Loader2 } from 'lucide-react';
import { GalleryImage } from '../types';

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=1200',
    category: 'Operations',
    title: 'Open Pit Operations',
    description: 'Heavy machinery active at a primary extraction site in Liberia.'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1200',
    category: 'Exploration',
    title: 'Geological Core Sampling',
    description: 'Exploration team conducting core analysis in the Nimba region.'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1574689049868-e94ed5301745?q=80&w=1200',
    category: 'Environment',
    title: 'Water Management System',
    description: 'Advanced filtration systems ensuring zero discharge impact on local waterways.'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200',
    category: 'Community',
    title: 'Education Support Program',
    description: 'Handing over a new community learning center as part of the CDA.'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1533038590840-1cde6b66b7c6?q=80&w=1200',
    category: 'Operations',
    title: 'Processing Facility',
    description: 'State-of-the-art mineral processing unit during shift change.'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200',
    category: 'Environment',
    title: 'Land Rehabilitation',
    description: 'Reforestation of previously mined sectors with indigenous species.'
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200',
    category: 'Exploration',
    title: 'Aero-Magnetic Surveying',
    description: 'Regional exploration mapping using advanced geophysical tools.'
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200',
    category: 'Community',
    title: 'Local Health Initiative',
    description: 'Mobile health clinic providing services to remote host communities.'
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1541888941255-202496a5c20c?q=80&w=1200',
    category: 'Operations',
    title: 'Safety Training Seminar',
    description: 'Mandatory HSE refresher course for all site operational staff.'
  }
];

interface GalleryImageItemProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
}

const GalleryImageItem: React.FC<GalleryImageItemProps> = ({ image, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="group relative h-80 overflow-hidden bg-slate-100 rounded-sm cursor-pointer shadow-sm border border-slate-100"
      onClick={() => onClick(image)}
    >
      {/* Loading Spinner */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
          <Loader2 className="w-8 h-8 text-slate-300 animate-spin" />
        </div>
      )}

      <img 
        src={image.url} 
        alt={image.title} 
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105 ${
          isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
        }`}
      />
      
      {/* Overlay Content - enhanced hover interactions */}
      {isLoaded && (
        <>
          {/* Fading Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
          
          {/* Content with synced fade and slide */}
          <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
            <span className="inline-block px-2 py-1 mb-2 bg-amber-500 text-slate-900 text-[10px] font-bold uppercase tracking-widest shadow-lg">
              {image.category}
            </span>
            <h3 className="text-white font-bold text-lg mb-1 drop-shadow-md">{image.title}</h3>
            <p className="text-slate-300 text-xs transition-opacity duration-500 line-clamp-2 leading-relaxed">
              {image.description}
            </p>
          </div>

          {/* Quick Action Button Reveal */}
          <div className="absolute top-4 right-4 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-amber-500 hover:text-slate-900 transition-colors">
              <Maximize2 size={18} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = ['All', 'Operations', 'Exploration', 'Community', 'Environment'];

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="bg-white">
      <PageHeader 
        title="Visual Archive" 
        category="Media Gallery"
        subtitle="Explore our operational footprint, community impact, and commitment to environmental excellence."
        image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2 text-slate-400">
              <Filter size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Filter By:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${
                    filter === cat 
                    ? 'bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/20' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <GalleryImageItem 
                key={image.id} 
                image={image} 
                onClick={setSelectedImage} 
              />
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="py-20 text-center text-slate-400 italic">
              No images found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 md:p-10 transition-opacity duration-300">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
          >
            <X size={32} />
          </button>
          
          <div className="max-w-6xl w-full flex flex-col md:flex-row bg-slate-900 shadow-2xl overflow-hidden rounded-sm relative animate-[fadeIn_0.3s_ease-out]">
            <div className="flex-[2] bg-black flex items-center justify-center">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-amber-500 font-bold uppercase text-xs tracking-widest mb-4">
                {selectedImage.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-6 border-b border-slate-800 pb-6">
                {selectedImage.title}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-10 italic">
                "{selectedImage.description}"
              </p>
              <div className="mt-auto pt-6 border-t border-slate-800 flex items-center gap-4">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs">
                  GEO
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">
                  Verified Site Capture • 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}} />
    </div>
  );
};

export default Gallery;
