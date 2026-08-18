import type { Metadata, Viewport } from "next";
import "./globals.css";
import { getSiteUrl } from "./site-url";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = await getSiteUrl();

  return {
  metadataBase: siteUrl,
  title: {
    default: "Chemame Shipping | Car Shipping to Africa & Mauritania",
    template: "%s | Chemame Shipping",
  },
  description:
    "Ship cars, SUVs, pickups and light trucks from the United States to Africa with dedicated service to Mauritania. Container and Ro-Ro ocean freight.",
  applicationName: "Chemame Shipping",
  keywords: [
    "car shipping to Africa",
    "car shipping to Mauritania",
    "vehicle shipping from USA",
    "Ro-Ro shipping Africa",
    "container car shipping",
    "ocean freight Mauritania",
  ],
  authors: [{ name: "Chemame Shipping" }],
  creator: "Chemame Shipping",
  publisher: "Chemame Shipping",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Chemame Shipping",
    title: "Ship Your Vehicle to Africa with Confidence",
    description:
      "Vehicle ocean freight from the United States to African ports, with a dedicated route to Mauritania.",
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 909,
        alt: "Chemame Shipping — Cars to Africa and Mauritania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chemame Shipping | USA to Africa Vehicle Shipping",
    description:
      "Container and Ro-Ro vehicle shipping from the United States to Africa and Mauritania.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  };
}

export const viewport: Viewport = {
  themeColor: "#071f35",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
