import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsAppButton";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Clearclaim",
  description: "Physical shares to DEMAT conversion",
  other: {
    "google-site-verification": "5Drr5xwe4K0Ni-4z4UtEbxIlGiyA8uuCy5K4Xh8JVyQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="5Drr5xwe4K0Ni-4z4UtEbxIlGiyA8uuCy5K4Xh8JVyQ" />    
      </head>
      <body>
        <Header />
        {children}
        <WhatsAppPopup />
        <Footer />
      </body>
    </html>
  );
}
