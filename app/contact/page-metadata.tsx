import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Contact Us | PimpMyBike SG - Singapore's Motorcycle Detailing Service",
    description: "Get in touch with PimpMyBike SG for premium motorcycle detailing services in Singapore. Visit our location, call us, or send a message to book your service today.",
    alternates: {
      canonical: "https://pimpmybikesg.vercel.app/contact",
    },
    openGraph: {
      title: "Contact Us | PimpMyBike SG - Singapore's Motorcycle Detailing Service",
      description: "Get in touch with PimpMyBike SG for premium motorcycle detailing services in Singapore. Visit our location, call us, or send a message to book your service today.",
      url: "https://pimpmybikesg.vercel.app/contact",
      siteName: "PimpMyBike SG",
      images: [
        {
          url: "https://pimpmybikesg.vercel.app/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Contact PimpMyBike SG - Premium Motorcycle Detailing Services",
        },
      ],
      locale: "en_SG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Us | PimpMyBike SG - Singapore's Motorcycle Detailing Service",
      description: "Get in touch with PimpMyBike SG for premium motorcycle detailing services in Singapore. Visit our location, call us, or send a message to book your service today.",
      images: ["https://pimpmybikesg.vercel.app/opengraph-image"],
    },
    keywords: [
      "contact motorcycle detailer",
      "Singapore bike detailing",
      "book motorcycle service",
      "motorcycle cleaning appointment",
      "PimpMyBike SG location",
      "motorcycle detailing contact",
      "bike service booking",
      "Singapore automotive services",
    ],
  };
} 