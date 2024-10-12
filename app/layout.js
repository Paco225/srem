import localFont from "next/font/local";
import "./globals.css";
import WhatsAppButton from "./components/Whatsapp";
import Navbar from '../app/components/Navbar';
import Footer from "./components/Footer";
import Hero from "./components/Hero";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}