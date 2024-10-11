import localFont from "next/font/local";
import "./globals.css";
import WhatsAppButton from "./components/Whatsapp";
import Navbar from '../app/components/Navbar';
import Footer from "./components/Footer";
import Hero from "./components/Hero";


export const metadata = {
  title: "SREM",
  description: "Site web SREM",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <WhatsAppButton />
      <body className="bg-white">
        <Navbar />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}