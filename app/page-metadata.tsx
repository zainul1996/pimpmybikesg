import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Premium Motorcycle Detailing Services in Singapore | PimpMyBike SG",
    description: "PimpMyBike SG provides top-tier motorcycle detailing services including deep cleaning, polishing, ceramic coating and more. Trusted by 1200+ riders.",
    alternates: {
      canonical: "https://pimpmybike.sg",
    },
    openGraph: {
      title: "Premium Motorcycle Detailing Services in Singapore | PimpMyBike SG",
      description: "PimpMyBike SG provides top-tier motorcycle detailing services including deep cleaning, polishing, ceramic coating and more. Trusted by 1200+ riders.",
      url: "https://pimpmybike.sg",
      siteName: "PimpMyBike SG",
      images: [
        {
          url: "https://www.pimpmybike.sg/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "PimpMyBike SG - Premium Motorcycle Detailing Services",
        },
      ],
      locale: "en_SG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Premium Motorcycle Detailing Services in Singapore | PimpMyBike SG",
      description: "PimpMyBike SG provides top-tier motorcycle detailing services including deep cleaning, polishing, ceramic coating and more. Trusted by 1200+ riders.",
      images: ["https://www.pimpmybike.sg/opengraph-image.png"],
    },
    keywords: [
      "motorcycle detailing",
      "bike detailing",
      "motorcycle cleaning",
      "ceramic coating",
      "motorcycle polishing",
      "Singapore",
      "premium detailing",
      "bike maintenance",
    ],
  };
} 