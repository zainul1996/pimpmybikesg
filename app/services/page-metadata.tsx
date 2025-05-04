import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Motorcycle Detailing Services | PimpMyBike SG",
    description: "Explore our range of premium motorcycle detailing services including basic cleaning, ceramic coating, engine detailing, and paint correction in Singapore.",
    alternates: {
      canonical: "https://pimpmybikesg.vercel.app/services",
    },
    openGraph: {
      title: "Motorcycle Detailing Services | PimpMyBike SG",
      description: "Explore our range of premium motorcycle detailing services including basic cleaning, ceramic coating, engine detailing, and paint correction in Singapore.",
      url: "https://pimpmybikesg.vercel.app/services",
      siteName: "PimpMyBike SG",
      images: [
        {
          url: "https://pimpmybikesg.vercel.app/opengraph-image",
          width: 1200,
          height: 630,
          alt: "PimpMyBike SG - Motorcycle Detailing Services",
        },
      ],
      locale: "en_SG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Motorcycle Detailing Services | PimpMyBike SG",
      description: "Explore our range of premium motorcycle detailing services including basic cleaning, ceramic coating, engine detailing, and paint correction in Singapore.",
      images: ["https://pimpmybikesg.vercel.app/opengraph-image"],
    },
    keywords: [
      "motorcycle detailing services",
      "bike detailing packages",
      "ceramic coating",
      "engine cleaning",
      "paint correction",
      "chrome restoration",
      "Singapore motorcycle services",
      "premium bike cleaning",
    ],
  };
} 