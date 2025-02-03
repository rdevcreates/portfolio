import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google"; // Import font Poppins
import "./globals.css";
import Navbar from "./components/Navbar";

// Menggunakan font Poppins
const poppins = Poppins({
  weight: ["400", "600", "700"], // Bisa sesuaikan dengan varian yang diinginkan
  subsets: ["latin"],
  variable: "--font-poppins", // Variabel CSS
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Rudiyat Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`} // Menambahkan kelas untuk font Poppins
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
