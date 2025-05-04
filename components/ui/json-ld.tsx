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
    name: "PimpMyBike SG",
    url: "https://pimpmybike.sg",
    logo: "https://pimpmybike.sg/logo.png", // Replace with actual logo when available
    sameAs: [
      "https://facebook.com/pimpmybikesg", // Replace with actual social profiles when available
      "https://instagram.com/pimpmybikesg",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Bike Street", // Replace with actual address
      addressLocality: "Singapore",
      postalCode: "123456",
      addressCountry: "SG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+65-1234-5678", // Replace with actual phone
      contactType: "customer service",
    },
    description: "Premium motorcycle detailing services in Singapore. From deep cleans to specialized treatments, we help you unleash the full potential of your machine.",
  };

  return <JSONLD type="LocalBusiness" data={data} />;
}

export function ServiceJSONLD() {
  const data: JSONLDObject = {
    name: "Motorcycle Detailing Services",
    serviceType: "Motorcycle Detailing",
    provider: {
      "@type": "LocalBusiness",
      name: "PimpMyBike SG",
    },
    areaServed: {
      "@type": "Country",
      name: "Singapore",
    },
    description: "Premium motorcycle detailing services including deep cleaning, polishing, ceramic coating, and more.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "SGD",
    },
  };

  return <JSONLD type="Service" data={data} />;
} 