"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const recaptchaKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY ?? "";

interface Props {
  children: React.ReactNode;
}

export default function MyGoogleReCaptchaProvider({ children }: Props) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
