"use client";

import { ServiceJSONLD } from "@/components/ui/json-ld";

// Note: The metadata for this page is defined in page-metadata.tsx
// We use a separate file because "use client" can't be combined with metadata exports

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          title="Basic Detailing" 
          description="Complete exterior wash, degreasing, and basic polish to make your bike shine."
          price="$99"
        />
        <ServiceCard 
          title="Premium Detailing" 
          description="Advanced cleaning with premium waxing and protective coating for lasting shine."
          price="$149"
        />
        <ServiceCard 
          title="Ultimate Detailing" 
          description="Comprehensive detailing package with ceramic coating and protection against elements."
          price="$249"
        />
        <ServiceCard 
          title="Engine Detailing" 
          description="Deep cleaning of the engine and mechanical components to improve performance."
          price="$119"
        />
        <ServiceCard 
          title="Chrome Restoration" 
          description="Specialized treatment to restore and protect chrome parts from oxidation."
          price="$169"
        />
        <ServiceCard 
          title="Paint Correction" 
          description="Professional correction of paint imperfections, scratches, and swirl marks."
          price="$199"
        />
      </div>
      
      <ServiceJSONLD />
    </div>
  );
}

function ServiceCard({ title, description, price }: { title: string; description: string; price: string }) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <p className="text-primary font-bold">{price}</p>
    </div>
  );
} 