import type { Metadata } from "next"; 
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsAppButton";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Clearclaim",
  description: "Physical shares to DEMAT conversion",
  other: {
    "google-site-verification": "5Drr5xwe4K0Ni-4z4UtEbxIlGiyA8uuCy5K4Xh8JVyQ",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="5Drr5xwe4K0Ni-4z4UtEbxIlGiyA8uuCy5K4Xh8JVyQ"
        />
        {/* Google Tag Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EXJDZSKGBY"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EXJDZSKGBY');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <WhatsAppPopup />
        <Footer />
      </body>
    </html>
  );
}
