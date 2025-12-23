import React from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <div id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Our Customers Trust Us!</h2>
        
        {/* Rating Badges */}
        <div className="flex justify-center gap-8 mb-16">
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm">
            <span className="font-bold text-gray-500">Google</span>
            <div className="flex text-yellow-400">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm font-medium text-gray-600">5/5 stars</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm">
            <span className="font-bold text-gray-500">Trustpilot</span>
            <div className="flex text-green-500">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm font-medium text-gray-600">4.9/5 stars</span>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gray-100 p-8 rounded-xl relative">
            <Quote className="text-gray-300 w-12 h-12 mb-4 absolute top-6 left-6 -z-0 opacity-50" />
            <div className="relative z-10 pt-4">
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "I would be happy to use this company in the future and recommend them highly. They are all very pleasant, happy, polite and trustworthy."
              </p>
              <p className="font-bold text-charcoal">Vivien Spencer</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-8 rounded-xl relative">
            <Quote className="text-gray-300 w-12 h-12 mb-4 absolute top-6 left-6 -z-0 opacity-50" />
            <div className="relative z-10 pt-4">
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "We had an solar and battery installation from K Cahill Renewable and have been very impressed with the service and installation"
              </p>
              <p className="font-bold text-charcoal">Richard Poth</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <button className="p-2 rounded-full bg-charcoal text-white hover:bg-spruce transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button className="p-2 rounded-full bg-charcoal text-white hover:bg-spruce transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};