import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "CampTrek",
  description: "Explore the Great Outdoors",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className=" relative overflow-hidden ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
