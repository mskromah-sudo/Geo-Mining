import React from 'react';

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  category?: string;
  image?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  category,
  image,
}) => {
  return (
    <div className="relative w-full h-[400px] bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${image || 'https://picsum.photos/1920/600?grayscale&blur=2'}")`,
          opacity: 0.5,
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-in-up">
          {category && (
            <span className="inline-block py-1 px-3 mb-6 bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-sm">
              {category}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-slate-200 font-light leading-relaxed border-l-4 border-amber-500 pl-6">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
