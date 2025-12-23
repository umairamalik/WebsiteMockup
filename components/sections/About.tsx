import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal leading-tight">
              From Commercial Solar Farms to Domestic Air Source Heat Pumps
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              <span className="font-bold text-charcoal">Cahill Renewables</span> has been providing expert renewable energy solutions based since 2013 across the UK. Based in Colchester we are one of the leading providers in the South. No job is too big or too small for us to take on.
            </p>
          </div>
          <div className="lg:w-1/2 w-full h-80 lg:h-96 bg-gray-200 rounded-xl overflow-hidden shadow-xl relative">
            <img 
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop" 
              alt="Heat pump installation" 
              className="w-full h-full object-cover"
            />
            {/* Placeholder icon overlay from wireframe */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/40 rounded-full"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};