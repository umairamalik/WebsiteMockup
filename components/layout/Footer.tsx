import React from 'react';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer>
        {/* Pre-footer CTA */}
        <div className="container mx-auto px-6 mb-20">
            <div className="bg-gray-100 rounded-2xl overflow-hidden flex flex-col md:flex-row">
                <div className="p-12 md:w-1/2 flex flex-col justify-center items-start">
                    <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                        Cahill Renewables: Your<br/>Local Solar Panel Installer
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Our team are specialists in high quality Domestic and Commercial Solar PV Panel Installations.
                    </p>
                    <Button>Book A Consultation</Button>
                </div>
                <div className="md:w-1/2 bg-gray-300 min-h-[300px] relative">
                    <img 
                      src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" 
                      alt="Solar Landscape" 
                      className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-8 text-center">
            <p className="text-xs text-gray-500 max-w-2xl mx-auto px-6">
                Copyright ©2022 Cahill Corporation Limited T/A Cahill Renewables. All rights reserved.<br/>
                Company Registration No: 08460430 | VAT number: GB180772691
            </p>
        </div>
    </footer>
  );
};