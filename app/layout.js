import localFont from "next/font/local";
import "./globals.css";
import WhatsAppButton from "./components/Whatsapp";
import Navbar from '../app/components/Navbar';
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PageTransition from "./components/PageTransition";

export const metadata = {
  title: "SREM",
  description: "Site web SREM",
  keywords: "SREM, site web, services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-white">
        <Navbar />
        <WhatsAppButton />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}