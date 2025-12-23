import React from 'react';

export const Stats: React.FC = () => {
  return (
    <div className="bg-white py-12">
       <div className="container mx-auto px-6">
         <h3 className="text-center text-charcoal mb-8 text-lg font-medium">Our Proven Track Record</h3>
         <div className="bg-banana/20 border border-banana rounded-xl py-8 px-4">
            <div className="flex flex-wrap justify-between items-center text-center divide-y md:divide-y-0 md:divide-x divide-charcoal/20">
                <div className="w-full md:w-1/4 py-4">
                    <span className="block text-4xl lg:text-5xl font-bold text-spruce">1.2K</span>
                    <span className="text-charcoal font-medium">Satisfied<br/>Customers</span>
                </div>
                <div className="w-full md:w-1/4 py-4">
                    <span className="block text-4xl lg:text-5xl font-bold text-spruce">10</span>
                    <span className="text-charcoal font-medium">Years of<br/>Experience</span>
                </div>
                <div className="w-full md:w-1/4 py-4">
                    <span className="block text-4xl lg:text-5xl font-bold text-spruce">1</span>
                    <span className="text-charcoal font-medium">Day<br/>Installation</span>
                </div>
                <div className="w-full md:w-1/4 py-4">
                    <span className="block text-4xl lg:text-5xl font-bold text-spruce">25</span>
                    <span className="text-charcoal font-medium">Year<br/>Warranty</span>
                </div>
            </div>
         </div>
       </div>
    </div>
  );
};