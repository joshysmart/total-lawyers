import en from "@/language/en";
import MyButton from "../ui/MyButton";
import { FormState, UseFormRegister } from "react-hook-form";
import { TFormInputs } from "@/@types";
import ErrorText from "../ui/ErrorText";
import MyInput from "../ui/MyInput";

type StepFourValues = Pick<TFormInputs, "zipCode" | "healthCondition">;

interface StepFourProps {
  register: UseFormRegister<StepFourValues>;
  errors: FormState<StepFourValues>["errors"];
}

export default function StepFour({ register, errors }: StepFourProps) {
  return (
    <>
      <fieldset className="flex flex-col gap-4">
        <label htmlFor="zipCode" className="flex gap-2">
          <span>{7}.</span>
          <span>{en.questionSeven}</span>
        </label>
        <MyInput
          type="text"
          register={register}
          required={en.zipCodeRequired}
          pattern={{
            value: /^[0-9]{5}(?:-[0-9]{4})?$/,
            message: en.zipCodeRequired,
          }}
          name="zipCode"
        />

        {errors.zipCode?.message && (
          <ErrorText message={errors.zipCode.message} />
        )}
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <label htmlFor="healthCondition" className="flex gap-2">
          <span>8.</span>
          <span>{en.questionEight}</span>
        </label>
        <textarea
          id="healthCondition"
          className="h-36 resize-none border-2 border-[#E1E1E1] rounded px-4 py-3 focus:border-black outline-none"
          {...register("healthCondition", {
            required: en.healthCheckRequired,
          })}
        />

        {errors.healthCondition?.message && (
          <ErrorText message={errors.healthCondition.message} />
        )}
      </fieldset>

      <MyButton className="mt-4">{en.lastStep}</MyButton>

      <p className="lg:mt-2 text-xs text-[#8F8F8F] hidden lg:block">
        {en.privacyDisclaimerDescription}
      </p>
    </>
  );
}
