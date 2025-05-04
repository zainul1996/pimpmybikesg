"use client";

import { AdaptiveFocusCards } from "@/components/ui/adaptive-focus-cards";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { OrganizationJSONLD, ServiceJSONLD } from "@/components/ui/json-ld";
import { PricingSection } from "@/components/ui/pricing-section";

// Note: The metadata for this page is defined in page-metadata.tsx
// We use a separate file because "use client" can't be combined with metadata exports

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mt-2 md:mt-6">
        <AdaptiveFocusCards 
          title="Motorcycle Detailing"
          description="At PimpMyBikeSG, we deliver top-notch bike detailing services designed to elevate your riding experience. From deep cleans to specialized treatments, we help you unleash the full potential of your machine—making every ride smoother, sharper, and undeniably yours."
          interval={2500}
        />
      </div>

      <TestimonialsSection />
      <PricingSection />
      
      {/* JSON-LD for structured data - good for SEO */}
      <OrganizationJSONLD />
      <ServiceJSONLD />
    </div>
  );
}
