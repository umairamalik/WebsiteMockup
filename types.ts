import { ReactNode } from "react";

export interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ReviewProps {
  quote: string;
  author: string;
  source: 'Google' | 'Trustpilot';
  rating: number;
}

export interface StepProps {
  number: number;
  title: string;
  description: string;
  last?: boolean;
}

export interface FAQItemProps {
  question: string;
  answer: string;
}
