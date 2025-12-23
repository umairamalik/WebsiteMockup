import React from 'react';
import { Clock, Calendar, Award, CheckCircle } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const items = [
    {
      icon: <Clock className="w-8 h-8 text-spruce" />,
      text: "Quick turnaround on small households"
    },
    {
      icon: <Calendar className="w-8 h-8 text-spruce" />,
      text: "1-3 days installations times (fastest in the business)"
    },
    {
      icon: <Award className="w-8 h-8 text-spruce" />,
      text: "Trust trader with 10 years+ experience"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-spruce" />,
      text: "Certified by all major accreditation"
    }
  ];

  return (
    <div className="bg-gray-100 py-12 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white transition-colors duration-300">
              <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                {item.icon}
              </div>
              <p className="text-sm font-semibold text-charcoal leading-snug pt-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};