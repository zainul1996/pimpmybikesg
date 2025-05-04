import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Pricing | PimpMyBike SG - Motorcycle Detailing Service Packages",
    description: "Explore our motorcycle detailing pricing packages in Singapore, from basic cleaning to premium services including ceramic coating and paint correction. Find the perfect package for your bike.",
    alternates: {
      canonical: "https://pimpmybike.sg/pricing",
    },
    openGraph: {
      title: "Pricing | PimpMyBike SG - Motorcycle Detailing Service Packages",
      description: "Explore our motorcycle detailing pricing packages in Singapore, from basic cleaning to premium services including ceramic coating and paint correction. Find the perfect package for your bike.",
      url: "https://pimpmybike.sg/pricing",
      siteName: "PimpMyBike SG",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "PimpMyBike SG - Motorcycle Detailing Pricing Packages",
        },
      ],
      locale: "en_SG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Pricing | PimpMyBike SG - Motorcycle Detailing Service Packages",
      description: "Explore our motorcycle detailing pricing packages in Singapore, from basic cleaning to premium services including ceramic coating and paint correction. Find the perfect package for your bike.",
      images: ["/opengraph-image.png"],
    },
    keywords: [
      "motorcycle detailing pricing",
      "bike cleaning packages",
      "motorcycle service cost",
      "ceramic coating price",
      "Singapore bike detailing rates",
      "premium motorcycle cleaning",
      "engine detailing cost",
      "paint correction pricing",
    ],
  };
} 