import localFont from "next/font/local";
import "./globals.css";
import WhatsAppButton from "./components/Whatsapp";


export const metadata = {
  title: "SREM",
  description: "Site web SREM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}