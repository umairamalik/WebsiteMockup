import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItemProps } from '../../types';

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden mb-4">
      <button 
        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-charcoal">{question}</span>
        {isOpen ? <Minus className="text-charcoal shrink-0" /> : <Plus className="text-charcoal shrink-0" />}
      </button>
      {isOpen && (
        <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How do solar panels work?",
      answer: "Tollere odium autem in nostra potestate sint, ab omnibus et contra naturam transferre in nobis. Sed interim toto desiderio supprimunt: si vis aliqua quae in manu tua tibi necesse confundentur et quae, quod laudabile esset, nihil tamen possides. Oportet uti solum de actibus prosequitonem et fugam, haec leniter et blandus et reservato. Quae tibi placent quicunq prosunt aut diligebat multum, quod memor sis ad communia."
    },
    {
      question: "How many solar panels are needed to run a house?",
      answer: "This depends on your energy usage and roof size. Typically, a standard 3-bedroom home requires around 10-12 panels (4kW system) to significantly offset energy bills."
    },
    {
      question: "How do I qualify for solar panel grants?",
      answer: "Qualification depends on various factors including your property's EPC rating, household income, and current government schemes like ECO4. Our team can guide you through the eligibility process."
    },
    {
      question: "What is the best solar panel started kit for home?",
      answer: "The 'best' kit varies by needs, but we recommend a system that includes hybrid inverters and battery storage to maximize self-consumption of the energy you generate."
    },
    {
      question: "Does Cahill Renewables offer a solar panel comparison?",
      answer: "Yes, during our initial consultation, we can compare different panel types (Monocrystalline vs Polycrystalline) and brands to find the best fit for your budget and performance goals."
    }
  ];

  return (
    <div id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};