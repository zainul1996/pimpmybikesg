"use client";

import { OrganizationJSONLD } from "@/components/ui/json-ld";

// Note: The metadata for this page is defined in page-metadata.tsx
// We use a separate file because "use client" can't be combined with metadata exports

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About PimpMyBike SG</h1>
      
      <div className="max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Founded in 2018 by passionate motorcycle enthusiasts, PimpMyBike SG began with a simple mission: to provide Singapore&apos;s riders with detailing services that truly understand the unique needs of motorcycles.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            What started as a small garage operation has grown into Singapore&apos;s premier motorcycle detailing service, trusted by over 1,200 riders and counting.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We believe motorcycles deserve specialized care that goes beyond what general vehicle detailing offers. Each bike is unique, and we tailor our approach to honor that individuality.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Using only premium products and techniques developed specifically for motorcycles, we ensure your bike receives the care it deserves - enhancing both its appearance and longevity.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our technicians are not just detailers - they&apos;re riders themselves. This means we understand the passion you have for your machine and treat each bike with the same care we would our own. With certifications in professional detailing and years of hands-on experience, our team combines technical expertise with genuine motorcycle enthusiasm.
          </p>
        </section>
      </div>
      
      <OrganizationJSONLD />
    </div>
  );
} 