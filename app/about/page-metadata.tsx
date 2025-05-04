import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "About Us | PimpMyBike SG - Singapore's Premier Motorcycle Detailers",
    description: "Learn about PimpMyBike SG, Singapore's specialized motorcycle detailing service founded by riders for riders. Discover our story, approach, and team.",
    alternates: {
      canonical: "https://pimpmybikesg.vercel.app/about",
    },
    openGraph: {
      title: "About Us | PimpMyBike SG - Singapore's Premier Motorcycle Detailers",
      description: "Learn about PimpMyBike SG, Singapore's specialized motorcycle detailing service founded by riders for riders. Discover our story, approach, and team.",
      url: "https://pimpmybikesg.vercel.app/about",
      siteName: "PimpMyBike SG",
      images: [
        {
          url: "https://pimpmybikesg.vercel.app/opengraph-image",
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
      images: ["https://pimpmybikesg.vercel.app/opengraph-image"],
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