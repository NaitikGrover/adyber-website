import React from "react";
import { cn } from "../../lib/utils";
import {
    PenTool,
    Instagram,
    Target,
    Globe,
    Megaphone,
    Search,
} from "lucide-react";

interface FeatureProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}

const Feature: React.FC<FeatureProps> = ({
    title,
    description,
    icon,
    index,
}) => {
    return (
        <div
            className={cn(
                "flex flex-col relative group/feature overflow-hidden",

                // Consistent Design for all views (PC style)
                "items-start justify-start text-left py-10 px-8",
                "bg-transparent border-white/10",

                // Mobile (1 column)
                "border-b border-white/10 last:border-b-0",

                // Tablet (md: 2 columns)
                "md:border-r",
                (index % 2 === 1) && "md:border-r-0",
                "md:border-b",
                index >= 4 && "md:border-b-0",

                // Desktop (lg: 3 columns)
                "lg:border-r",
                (index % 3 === 2) && "lg:border-r-0",
                "lg:border-b",
                index >= 3 && "lg:border-b-0",

                // Force desktop style overrides for mobile
                "aspect-auto rounded-none border-x-0"
            )}
        >
            {/* Hover Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                {index < 3 && (
                    <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-brand-lime/10 to-transparent" />
                )}
                {index >= 3 && (
                    <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-brand-lime/10 to-transparent" />
                )}
            </div>

            <div className="mb-4 relative z-10 text-gray-400 group-hover/feature:text-brand-lime transition-all duration-300">
                {icon}
            </div>

            <div className="text-lg sm:text-xl font-bold mb-3 relative z-10 leading-tight">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-zinc-700 group-hover/feature:bg-brand-lime transition-all duration-200 origin-center -ml-8" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
                    {title}
                </span>
            </div>

            <p className="text-sm text-gray-400 max-w-xs relative z-10 leading-relaxed group-hover/feature:text-gray-300 transition-colors">
                {description}
            </p>
        </div>
    );
};

export function FeaturesSectionWithHoverEffects() {
    const features = [
        {
            title: "Website Development",
            description: "High-performance, mobile-first websites designed to convert visitors into loyal customers through seamless user experiences.",
            icon: <Globe className="w-6 h-6" />,
        },
        {
            title: "Social Media Management",
            description: "Strategic planning and execution of your social presence to build brand authority and engage your audience daily.",
            icon: <Instagram className="w-6 h-6" />,
        },
        {
            title: "Content Creation",
            description: "High-impact graphics, cinematic videos, and persuasive copywriting tailored to your brand's unique voice.",
            icon: <PenTool className="w-6 h-6" />,
        },
        {
            title: "Search Engine Optimization",
            description: "Dominating search rankings to drive high-quality organic traffic and long-term sustainable growth.",
            icon: <Search className="w-6 h-6" />,
        },
        {
            title: "Marketing",
            description: "Comprehensive marketing strategies that align your brand with the right audience across all digital touchpoints.",
            icon: <Megaphone className="w-6 h-6" />,
        },
        {
            title: "Lead Generation & Paid Advertising",
            description: "Scalable systems and targeted ad campaigns designed to generate high-quality leads and maximize your ROI.",
            icon: <Target className="w-6 h-6" />,
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto border border-white/10 md:border-0">
            {features.map((feature, index) => (
                <Feature
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    index={index}
                />
            ))}
        </div>
    );
}
