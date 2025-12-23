import React from 'react';
import { Quote } from 'lucide-react';

export const Gallery: React.FC = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-charcoal mb-12">
          Solar PV We've Installed at Properties Across the UK
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="aspect-square bg-gray-300 rounded-xl overflow-hidden group shadow-lg">
             <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop" alt="House 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square bg-gray-300 rounded-xl overflow-hidden group shadow-lg">
             <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" alt="House 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square bg-gray-300 rounded-xl overflow-hidden group shadow-lg">
             <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop" alt="House 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative px-8">
           <Quote className="inline-block text-spruce w-8 h-8 mb-4 rotate-180" />
           <p className="text-gray-700 leading-relaxed mb-4">
            "After speaking to a selection of other renewable energy companies, I chose Cahill Renewables to install my air source heat pump and I haven't looked back since. The office staff to the installers were all top notch I can't fault them in the slightest. Communication, workmanship and price were all exemplary. Thank you 🙏"
           </p>
           <p className="font-bold text-sm text-charcoal">Harry Ball</p>
        </div>
      </div>
    </div>
  );
};