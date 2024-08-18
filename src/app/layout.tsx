import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import en from "@/language/en";
import MyGoogleReCaptchaProvider from "../components/providers/MyGoogleReCaptchaProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer />
      </body>
    </html>
  );
}
