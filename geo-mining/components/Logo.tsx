import React from 'react';
import logoImg from '../images/logo.jpg';

/**
 * The Logo component renders the official GEO Mining logo.
 * Using the high-resolution circular badge provided by the company.
 */
export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`${className} relative flex items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-slate-100 shadow-inner`}
    >
      <img
        // Use a relative path to the file in your project folder
        src={logoImg}
        alt="GEO Mining & Environmental Consultancy"
        className="w-full h-full object-contain p-0.5"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          // Fallback to a remote URL if local logo.png is not found
          target.src =
            'https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/geomining-logo.png';
          target.onerror = () => {
            // Ultimate fallback using initials
            target.src =
              'https://api.dicebear.com/7.x/initials/svg?seed=GM&backgroundColor=2d5a27&fontColor=ffffff&fontSize=45';
          };
        }}
      />
    </div>
  );
};

export default Logo;
