"use client";

import { useState } from "react";
import Info from "./Info";

export default function FormSection() {
  const [step, setStep] = useState(1);
  return (
    <div className="bg-white lg:w-[56%] p-4 py-6 lg:p-10">
      <div className="lg:hidden">
        <Info />
      </div>
    </div>
  );
}
