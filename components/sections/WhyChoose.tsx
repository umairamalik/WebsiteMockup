import React from 'react';
import { UserX, Lightbulb, Globe } from 'lucide-react';

export const WhyChoose: React.FC = () => {
  const features = [
    {
      Icon: UserX,
      title: "A no Salesperson Experience",
      desc: "Make a decision in your own time"
    },
    {
      Icon: Lightbulb,
      title: "Advice and Guidance",
      desc: "To help you make an informed decision"
    },
    {
      Icon: Globe,
      title: "Save money and the planet",
      desc: "Reduce your carbon contribution drastically"
    }
  ];

  return (
    <div id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Why Choose Cahill-Renewables Over The Competition
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            <span className="font-bold text-charcoal">Cahill Renewables</span> is always looking to use the most cutting edge technology within the renewable energy industry
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center mb-6 group-hover:bg-spruce transition-colors duration-300 shadow-lg">
                <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                   <f.Icon className="w-10 h-10 text-gray-500 group-hover:text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};