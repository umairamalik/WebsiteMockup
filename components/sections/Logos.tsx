import React from 'react';

export const Logos: React.FC = () => {
  return (
    <div className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <p className="text-charcoal font-bold mb-10 opacity-60 uppercase tracking-widest text-xs">Accredited & Trusted By</p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
            {/* Logo 1: SunCert */}
            <div className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-all cursor-pointer">
                <svg className="w-8 h-8 text-charcoal group-hover:text-spruce transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-xl font-bold text-charcoal tracking-tight">SunCert</span>
            </div>

            {/* Logo 2: EcoGrade */}
            <div className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-all cursor-pointer">
                <svg className="w-8 h-8 text-charcoal group-hover:text-spruce transition-colors" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22ZM12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" />
                </svg>
                <span className="text-xl font-bold text-charcoal tracking-tight">EcoGrade</span>
            </div>

             {/* Logo 3: GreenMark */}
             <div className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-all cursor-pointer">
                 <svg className="w-8 h-8 text-charcoal group-hover:text-spruce transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 3H3V21H21V3ZM19 19H5V5H19V19Z" />
                    <path d="M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                 </svg>
                <span className="text-xl font-bold text-charcoal tracking-tight">GreenMark</span>
            </div>

             {/* Logo 4: PowerSafe */}
             <div className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-all cursor-pointer">
                 <svg className="w-8 h-8 text-charcoal group-hover:text-spruce transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2V13H10V22L17 10H14V2H7Z" />
                 </svg>
                <span className="text-xl font-bold text-charcoal tracking-tight">PowerSafe</span>
            </div>

             {/* Logo 5: IsoStandard */}
             <div className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-all cursor-pointer">
                <svg className="w-8 h-8 text-charcoal group-hover:text-spruce transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 22H22L12 2ZM12 6L18.5 19H5.5L12 6Z" />
                </svg>
                <span className="text-xl font-bold text-charcoal tracking-tight">IsoStandard</span>
            </div>
        </div>
      </div>
    </div>
  );
};