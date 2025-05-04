"use client";

import { ServiceJSONLD } from "@/components/ui/json-ld";

// Note: The metadata for this page is defined in page-metadata.tsx
// We use a separate file because "use client" can't be combined with metadata exports

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Pricing Plans</h1>
      
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Choose the perfect detailing package for your motorcycle. All packages include our signature attention to detail and premium products.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard 
            title="Basic Package"
            price="$99"
            description="Essential detailing for riders who want to maintain their bike's appearance."
            features={[
              "Exterior wash and dry",
              "Degreasing of visible parts",
              "Basic polish application",
              "Tire cleaning and treatment",
              "Standard wax protection"
            ]}
            highlighted={false}
          />
          
          <PricingCard 
            title="Premium Package"
            price="$149"
            description="Comprehensive detailing for enthusiasts who want to take their bike's appearance to the next level."
            features={[
              "All Basic Package features",
              "Deep cleaning of hard-to-reach areas",
              "Advanced polishing for extra shine",
              "Premium wax application",
              "Chain cleaning and lubrication",
              "Exhaust polishing"
            ]}
            highlighted={true}
          />
          
          <PricingCard 
            title="Ultimate Package"
            price="$249"
            description="The definitive detailing experience for those who demand perfection."
            features={[
              "All Premium Package features",
              "Ceramic coating application",
              "Paint correction (minor scratches)",
              "Engine bay deep cleaning",
              "Chrome and metal polishing",
              "Protection against environmental elements",
              "3-month protection guarantee"
            ]}
            highlighted={false}
          />
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Add-On Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AddonCard title="Engine Detailing" price="$49" />
            <AddonCard title="Paint Correction" price="$79" />
            <AddonCard title="Chrome Restoration" price="$59" />
            <AddonCard title="Headlight Restoration" price="$39" />
            <AddonCard title="Leather Seat Treatment" price="$45" />
            <AddonCard title="Rain Repellent Treatment" price="$35" />
          </div>
        </div>
      </div>
      
      <ServiceJSONLD />
    </div>
  );
}

function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  highlighted 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  highlighted: boolean;
}) {
  return (
    <div className={`border rounded-lg p-6 ${highlighted ? 'border-primary shadow-lg' : 'border-gray-200 dark:border-gray-800'}`}>
      <h3 className={`text-xl font-semibold mb-2 ${highlighted ? 'text-primary' : ''}`}>{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      
      <ul className="space-y-2 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full py-2 rounded-md ${
          highlighted 
            ? 'bg-primary text-white hover:bg-primary/90' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
        } transition-colors`}
      >
        Book Now
      </button>
    </div>
  );
}

function AddonCard({ title, price }: { title: string; price: string }) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
      <h3 className="font-medium">{title}</h3>
      <p className="text-primary font-bold mt-1">{price}</p>
    </div>
  );
} 