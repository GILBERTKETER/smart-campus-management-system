import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "TMU - Smart Campus Management System",
  description:
    "TMU's Smart Campus Management System is an innovative platform designed to enhance university operations by integrating AI-driven academic advising, automated scheduling, resource optimization, and real-time facility management. Built to provide a seamless experience for students, faculty, and administrators, this system offers advanced analytics, smart notifications, and secure document management to improve campus efficiency.",
};

import Header from "@/components/header/index";
import Footer from "@/components/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-light ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <ScrollToTop/>
        <Footer />
      </body>
    </html>
  );
}
