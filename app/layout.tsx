import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteNavbar } from "@/components/ui/site-navbar";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pimpmybike.sg"),
  title: {
    default: "PimpMyBike SG | Premium Motorcycle Detailing Services",
    template: "%s | PimpMyBike SG"
  },
  description: "Premium motorcycle detailing services in Singapore. From deep cleans to specialized treatments, we help you unleash the full potential of your machine.",
  keywords: ["motorcycle detailing", "bike cleaning", "premium detailing", "Singapore", "motorcycle wash", "ceramic coating", "polishing", "bike detailing"],
  authors: [{ name: "PimpMyBike SG" }],
  creator: "PimpMyBike SG",
  publisher: "PimpMyBike SG",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    }
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.pimpmybike.sg",
    siteName: "PimpMyBike SG",
    title: "PimpMyBike SG | Premium Motorcycle Detailing Services",
    description: "Premium motorcycle detailing services in Singapore. From deep cleans to specialized treatments, we help you unleash the full potential of your machine.",
    images: [{
      url: "https://www.pimpmybike.sg/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "PimpMyBike SG",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PimpMyBike SG | Premium Motorcycle Detailing Services",
    description: "Premium motorcycle detailing services in Singapore. From deep cleans to specialized treatments, we help you unleash the full potential of your machine.",
    images: ["https://www.pimpmybike.sg/opengraph-image.png"],
    creator: "@pimpmybikesg",
    site: "@pimpmybikesg",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "Automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteNavbar />
          <main>
          {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
