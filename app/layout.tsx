import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nasheli Mayén | Conferencista · Autora · Fundadora",
    template: "%s | Nasheli Mayén",
  },
  description: "Acompañando a mujeres a vivir desde su esencia, con propósito, fe y bienestar integral. Espíritu · Alma · Cuerpo.",
  metadataBase: new URL("https://mayenlegacy.com"),
  openGraph: {
    siteName: "Mayen Legacy",
    locale: "es_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
