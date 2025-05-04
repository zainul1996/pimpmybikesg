import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "About Us | PimpMyBike SG - Singapore's Premier Motorcycle Detailers",
    description: "Learn about PimpMyBike SG, Singapore's specialized motorcycle detailing service founded by riders for riders. Discover our story, approach, and team.",
    alternates: {
      canonical: "https://pimpmybike.sg/about",
    },
    openGraph: {
      title: "About Us | PimpMyBike SG - Singapore's Premier Motorcycle Detailers",
      description: "Learn about PimpMyBike SG, Singapore's specialized motorcycle detailing service founded by riders for riders. Discover our story, approach, and team.",
      url: "https://pimpmybike.sg/about",
      siteName: "PimpMyBike SG",
      images: [
        {
          url: "https://www.pimpmybike.sg/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "PimpMyBike SG Team - Motorcycle Detailing Specialists",
        },
      ],
      locale: "en_SG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "About Us | PimpMyBike SG - Singapore's Premier Motorcycle Detailers",
      description: "Learn about PimpMyBike SG, Singapore's specialized motorcycle detailing service founded by riders for riders. Discover our story, approach, and team.",
      images: ["https://www.pimpmybike.sg/opengraph-image.png"],
    },
    keywords: [
      "motorcycle detailing Singapore",
      "about PimpMyBike SG",
      "motorcycle detailers",
      "rider owned business",
      "bike detailing experts",
      "Singapore motorcycle services",
      "motorcycle enthusiasts",
      "professional bike care",
    ],
  };
} 