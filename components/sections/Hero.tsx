import React from 'react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 pt-28 pb-20 lg:pt-32 flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" 
          alt="Solar Panels on Roof" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-spruce/90 to-charcoal/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6">
          <span className="inline-block px-4 py-1 bg-banana text-charcoal font-bold text-sm rounded-full tracking-wide">
            Rated #1 Solar Panel Installer In Kent / Essex
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Kent's Most Trusted Solar Panel Installer
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 max-w-xl leading-relaxed">
            Request a solar consultation in under 2 mins & join 1000s of home owners already saving on their energy bills.
          </p>
          
          <div className="hidden lg:block pt-8">
             <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 w-full max-w-lg overflow-hidden shadow-2xl transform transition hover:scale-105 duration-300">
                <div className="h-64 relative">
                   <img 
                    src="https://plus.unsplash.com/premium_photo-1764695386031-859e99b48533?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMHdpdGglMjBzb2xhciUyMHBhbm5lbHxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Solar Potential Visualization" 
                    className="w-full h-full object-cover"
                   />
                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-10">
                      <p className="text-white font-semibold text-sm tracking-wide uppercase">Solar Potential</p>
                   </div>
                </div>
                <div className="p-5 bg-charcoal/80 backdrop-blur-md border-t border-white/10">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-gray-300 text-sm">Est. Annual Savings</span>
                        <span className="text-banana font-bold text-xl">£1,250+</span>
                    </div>
                     <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                        <div className="bg-banana h-full rounded-full w-3/4 shadow-[0_0_10px_rgba(230,221,59,0.5)]"></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Based on average installation in your area
                    </p>
                </div>
             </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-xl shadow-2xl p-6 lg:p-8 max-w-md ml-auto w-full">
          <div className="text-center mb-6">
            <h3 className="text-charcoal font-bold text-lg leading-snug">
              Complete this form and get your installation done by most trusted solar panel installer
            </h3>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-charcoal uppercase mb-1">Full Name</label>
              <input type="text" className="w-full border border-gray-300 rounded p-2 focus:border-spruce focus:ring-1 focus:ring-spruce outline-none" />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-charcoal uppercase mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded p-2 focus:border-spruce focus:ring-1 focus:ring-spruce outline-none" />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-charcoal uppercase mb-1">Phone Number</label>
              <input type="tel" className="w-full border border-gray-300 rounded p-2 focus:border-spruce focus:ring-1 focus:ring-spruce outline-none" />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-charcoal uppercase mb-1">Postcode</label>
              <input type="text" className="w-full border border-gray-300 rounded p-2 focus:border-spruce focus:ring-1 focus:ring-spruce outline-none" />
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal uppercase mb-1">Budget</label>
              <select className="w-full border border-gray-300 rounded p-2 focus:border-spruce focus:ring-1 focus:ring-spruce outline-none bg-white">
                <option>up to £8000</option>
                <option>£8000 - £12000</option>
                <option>£12000+</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal uppercase mb-2">Which is the best time to call?</label>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="text-spruce focus:ring-spruce rounded" />
                  <span className="text-sm text-gray-600">ASAP</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="text-spruce focus:ring-spruce rounded" />
                  <span className="text-sm text-gray-600">Afternoon</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="text-spruce focus:ring-spruce rounded" />
                  <span className="text-sm text-gray-600">Morning</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="text-spruce focus:ring-spruce rounded" />
                  <span className="text-sm text-gray-600">Evening</span>
                </label>
              </div>
            </div>

            <Button fullWidth type="submit" className="mt-2">
              Book A Consultation
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};