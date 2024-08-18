"use client";

import { useState } from "react";
import Info from "./Info";
import StepOne from "../forms/StepOne";
import { SubmitHandler, useForm } from "react-hook-form";
import { TFormInputs } from "@/@types";
import StepTwo from "../forms/StepTwo";
import Support from "./Supports";
import StepThree from "../forms/StepThree";
import StepFour from "../forms/StepFour";
import StepFive from "../forms/StepFive";
import { toast } from "react-toastify";

export default function FormSection() {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm<TFormInputs>();
  const LAST_STEP = 5;

  const onSubmit: SubmitHandler<TFormInputs> = (data) => {
    console.log(data);
    if (step < LAST_STEP) {
      setStep(step + 1);
      return;
    }
    toast.success("Form submitted successfully");
  };

  return (
    <div className="bg-white lg:w-[56%] p-4 py-6 lg:p-10 flex flex-col gap-8">
      <div className="lg:hidden">
        <Info />
      </div>
      <form
        action=""
        className="text-lg flex flex-col gap-8 lg:gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {step === 1 && (
          <StepOne
            register={register}
            errors={errors}
            setValue={setValue}
            clearErrors={clearErrors}
          />
        )}
        {step === 2 && <StepTwo register={register} errors={errors} />}
        {step === 3 && <StepThree register={register} errors={errors} />}
        {step === 4 && <StepFour register={register} errors={errors} />}
        {step === 5 && <StepFive register={register} errors={errors} />}
      </form>
      <div className="lg:hidden">
        <Support />
      </div>
    </div>
  );
}
