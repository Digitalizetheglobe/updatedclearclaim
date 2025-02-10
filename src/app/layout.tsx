import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsAppButton";

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
