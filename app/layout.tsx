import type { Metadata } from "next";
import { VT323, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { translateContent } from "@/content/translations";
import { LanguageProvider } from "@/components/Language";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display-loaded",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono-loaded",
  display: "swap",
});

const manrope = Manrope({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-body-loaded",
  display: "swap",
});

const galicianSite = translateContent(site, "gl");
export const metadata: Metadata = {
  title: {
    default: `${galicianSite.name} — Anceu`,
    template: `%s · ${galicianSite.name}`,
  },
  description: galicianSite.description,
  metadataBase: new URL("https://rurali-art.ruralhackers.com"),
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: `${galicianSite.name} — Anceu`,
    description: galicianSite.description,
    locale: "gl_ES",
    type: "website",
    siteName: galicianSite.name,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: galicianSite.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${galicianSite.name} — Anceu`,
    description: galicianSite.description,
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gl">
      <body
        className={`${vt323.variable} ${jetbrains.variable} ${manrope.variable} min-h-screen`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
