import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  verification: {
    google: "_EELgTgFE7VY1xRD11lH0RaI5RVvUuD5VmCqwhE-iZs",
  },
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
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D8T80L93W1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D8T80L93W1');
          `}
        </Script>
      </body>
    </html>
  );
}
