import type { Metadata } from "next";
import { Inter, Wix_Madefor_Text } from "next/font/google";
import "./globals.css";

const wixMadeFor = Wix_Madefor_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOUTHCINEMAX",
  description: "South Cine Max",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${wixMadeFor.className} bg-[#000000]`}>{children}</body>
    </html>
  );
}
