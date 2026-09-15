import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Sora({
  variable: "--font-sans-custom",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-custom",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — 3D Baskı Ürünleri ve Özel Üretim`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "3D baskı",
    "3D yazıcı ürünleri",
    "3D maske",
    "3D kutu",
    "fidget oyuncak",
    "pinch ball",
    "prototip üretim",
    "özel üretim",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — 3D Baskı Ürünleri ve Özel Üretim`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
