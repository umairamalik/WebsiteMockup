import React from 'react';
import { Button } from '../ui/Button';

export const Process: React.FC = () => {
  const steps = [
    {
      title: "Initial Consultation",
      desc: "Speak with a member of the team and one of our solar energy experts will discuss your enquiry in detail to provide you with a solution tailored to your property."
    },
    {
      title: "Receive Quote",
      desc: "Cahill Renewables will provide a proposal & quote for the installation having taken measurements remotely."
    },
    {
      title: "Make DNO Application",
      desc: "After agreeing with the quote, we need to make an application to the district network operator (national grid) to install the solar system."
    },
    {
      title: "Arrange Installation",
      desc: "As soon as the grid grant permission for the installation, Cahill Renewables arranges a date to complete installation on. Solar installations rarely take longer than a day."
    },
    {
      title: "Save Money and Reduce CO2",
      desc: "Once the installation is complete, a team member will guide you through the system, set up a monitoring app on your smartphone and give you all the information required."
    },
    {
      title: "Aftercare",
      desc: "At Cahill Renewables we pride ourselves on thorough pre-sales service as well as our after-sales care. If there is anything that ever requires clarification we are a phone call away."
    }
  ];

  return (
    <div id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            How Our Solar Panel Installation Works
          </h2>
          <p className="text-gray-600">
            We like everything to be simple and easy, from beginning to end
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Steps */}
          <div className="relative border-l-2 border-dashed border-gray-300 ml-4 lg:ml-0 space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative pl-12">
                {/* Number Bubble */}
                <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-white border-2 border-spruce flex items-center justify-center font-bold text-spruce z-10">
                  {idx + 1}.
                </div>
                
                <h3 className="text-xl font-bold text-charcoal mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Right: Images Grid */}
          <div className="flex flex-col gap-6">
            <div className="h-64 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <img src="https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.webp?a=1&b=1&s=612x612&w=0&k=20&c=vwIX788BqsyiyPsTV9bCmAhjOV4AavH_wLc-pWNsAf8=" alt="Solar Installation Process" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-6 h-64">
                <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" alt="Technician" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" alt="Happy Family" className="w-full h-full object-cover" />
                </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
            <Button>Book A Consultation</Button>
        </div>
      </div>
    </div>
  );
};