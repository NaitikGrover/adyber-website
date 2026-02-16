import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingTier {
  name: string;
  price: string;
  originalPrice?: string;
  features: string[];
  recommended?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}