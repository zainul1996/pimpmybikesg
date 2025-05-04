"use client";

import React from "react";

// Define a more specific type for JSON-LD data
type JSONLDValue = string | number | boolean | null | JSONLDObject | JSONLDValue[];
interface JSONLDObject {
  [key: string]: JSONLDValue;
}

interface JSONLDProps {
  type: "Organization" | "LocalBusiness" | "Product" | "BreadcrumbList" | "Service" | string;
  data: JSONLDObject;
}

export function JSONLD({ type, data }: JSONLDProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function OrganizationJSONLD() {
  const data: JSONLDObject = {
    name: "PimpMyBikeSG",
    url: "https://www.pimpmybike.sg",
    logo: "https://www.pimpmybike.sg/logo.png",
    sameAs: [
      "https://www.instagram.com/pimpmybike.sg/",
      "https://www.tiktok.com/@pimpmybike.sg",
      "https://www.youtube.com/user/Wix"
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "7A Marsiling Drive",
      addressLocality: "Singapore",
      postalCode: "730007",
      addressCountry: "SG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6587918141",
      contactType: "customer service",
    },
    description: "Premium motorcycle detailing services in Singapore. From deep cleans to specialized treatments, we help you unleash the full potential of your machine.",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "11:00",
        closes: "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "13:00",
        closes: "18:00"
      }
    ],
    priceRange: "$$"
  };

  return <JSONLD type="LocalBusiness" data={data} />;
}

export function ServiceJSONLD() {
  const data: JSONLDObject = {
    name: "Motorcycle Detailing Services",
    serviceType: "Motorcycle Detailing",
    provider: {
      "@type": "LocalBusiness",
      name: "PimpMyBikeSG",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7A Marsiling Drive",
        addressLocality: "Singapore",
        postalCode: "730007",
        addressCountry: "SG"
      }
    },
    areaServed: {
      "@type": "Country",
      name: "Singapore"
    },
    description: "Premium motorcycle detailing services including deep cleaning, polishing, ceramic coating, and more.",
    offers: [
      {
        "@type": "Offer",
        name: "Standard Detailing - Class 2B",
        price: "30.00",
        priceCurrency: "SGD",
        availability: "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        name: "Standard Detailing - Class 2A",
        price: "35.00",
        priceCurrency: "SGD",
        availability: "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        name: "Standard Detailing - Class 2",
        price: "40.00",
        priceCurrency: "SGD",
        availability: "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        name: "Glass Coating",
        price: "280.00-350.00",
        priceCurrency: "SGD",
        availability: "https://schema.org/InStock"
      }
    ]
  };

  return <JSONLD type="Service" data={data} />;
} 