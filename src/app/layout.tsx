import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import en from "@/language/en";
import MyGoogleReCaptchaProvider from "../components/providers/MyGoogleReCaptchaProvider";

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
      <body className={pubicSans.className}>
        <MyGoogleReCaptchaProvider>{children}</MyGoogleReCaptchaProvider>
      </body>
    </html>
  );
}
