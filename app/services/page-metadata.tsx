import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Motorcycle Detailing Services | PimpMyBike SG",
    description: "Explore our range of premium motorcycle detailing services including basic cleaning, ceramic coating, engine detailing, and paint correction in Singapore.",
    alternates: {
      canonical: "https://pimpmybike.sg/services",
    },
    openGraph: {
      title: "Motorcycle Detailing Services | PimpMyBike SG",
      description: "Explore our range of premium motorcycle detailing services including basic cleaning, ceramic coating, engine detailing, and paint correction in Singapore.",
      url: "https://pimpmybike.sg/services",
      siteName: "PimpMyBike SG",
      images: [
        {
          url: "/opengraph-image.png",
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
      images: ["/opengraph-image.png"],
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