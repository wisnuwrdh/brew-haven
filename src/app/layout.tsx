import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Brew Haven | Crafted Coffee, Comfortable Moments",
  description:
    "Tempat Kerja, Belajar, dan Menikmati Kopi Terbaik, dalam Satu Ruang. Brew Haven hadir untuk kamu yang butuh lebih dari sekadar kopi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="light">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
