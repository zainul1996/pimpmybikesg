import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Premium Motorcycle Detailing Services in Singapore | PimpMyBikeSG",
    description: "PimpMyBikeSG provides top-tier motorcycle detailing services including deep cleaning, polishing, ceramic coating and more. Trusted by 1200+ riders.",
    alternates: {
      canonical: "https://www.pimpmybike.sg",
    },
    openGraph: {
      title: "Premium Motorcycle Detailing Services in Singapore | PimpMyBikeSG",
      description: "PimpMyBikeSG provides top-tier motorcycle detailing services including deep cleaning, polishing, ceramic coating and more. Trusted by 1200+ riders.",
      url: "https://www.pimpmybike.sg",
      siteName: "PimpMyBikeSG",
      images: [
        {
          url: "https://www.pimpmybike.sg/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "PimpMyBikeSG - Premium Motorcycle Detailing Services",
        },
      ],
      locale: "en_SG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Premium Motorcycle Detailing Services in Singapore | PimpMyBikeSG",
      description: "PimpMyBikeSG provides top-tier motorcycle detailing services including deep cleaning, polishing, ceramic coating and more. Trusted by 1200+ riders.",
      images: ["https://www.pimpmybike.sg/opengraph-image.png"],
    },
    keywords: [
      "motorcycle detailing",
      "bike detailing",
      "motorcycle cleaning",
      "ceramic coating",
      "glass coating",
      "motorcycle polishing",
      "Singapore",
      "premium detailing",
      "bike maintenance",
      "chain maintenance",
    ],
    verification: {
      google: "verification_token", // Replace with actual Google verification token
    },
    category: "Automotive",
  };
} 