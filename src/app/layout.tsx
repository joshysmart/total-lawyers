import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import en from "@/language/en";

const pubicSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: en.metaTitle,
  description: en.metaDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pubicSans.className}>{children}</body>
    </html>
  );
}
