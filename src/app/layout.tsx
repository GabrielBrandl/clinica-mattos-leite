import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { clinic } from "@/content/clinic";
import { JsonLd } from "@/components/JsonLd";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(clinic.siteUrl),
  title: {
    default: `${clinic.name} | Nutrologia e Saúde Hormonal em Manaus`,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.description,
  keywords: [
    "nutrologia Manaus",
    "saúde hormonal Manaus",
    "Clínica Mattos Leite",
    "Dra. Fábia Mattos",
    "Dr. Felipe Leite",
  ],
  openGraph: {
    title: `${clinic.name} | Nutrologia e Saúde Hormonal`,
    description: clinic.description,
    locale: "pt_BR",
    type: "website",
    url: clinic.siteUrl,
    images: [{ url: "/images/recepcao.jpg", width: 1024, height: 526, alt: clinic.name }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0a2e46",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper text-ink">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
