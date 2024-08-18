import en from "@/language/en";
import CheckBoxCard from "../ui/CheckBoxCard";
import MyButton from "../ui/MyButton";
import { FormState, UseFormRegister } from "react-hook-form";
import { TFormInputs } from "@/@types";
import ErrorText from "../ui/ErrorText";

type StepTwoValues = Pick<TFormInputs, "treatment" | "job">;

interface StepTwoProps {
  register: UseFormRegister<StepTwoValues>;
  errors: FormState<StepTwoValues>["errors"];
}

export default function StepTwo({ register, errors }: StepTwoProps) {
  return (
    <>
      <fieldset className="flex flex-col gap-4">
        <label htmlFor="treatment" className="flex gap-2">
          <span>3.</span>
          <span>{en.questionThree}</span>
        </label>

        <div className="grid grid-cols-2 gap-6">
          {checkOptions.map((option) => (
            <CheckBoxCard
              key={option}
              name={"treatment"}
              option={option}
              register={register}
              required={en.healthCheckRequired}
            />
          ))}
        </div>
        {errors.treatment?.message && (
          <ErrorText message={errors.treatment.message} />
        )}
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <label htmlFor="job" className="flex gap-2">
          <span>4.</span>
          <span>{en.questionFour}</span>
        </label>
        <div className="grid grid-cols-2 gap-6">
          {checkOptions.map((option) => (
            <CheckBoxCard
              key={option}
              name={"job"}
              option={option}
              register={register}
              required={en.jobHistoryRequired}
            />
          ))}
        </div>
        {errors.job?.message && <ErrorText message={errors.job.message} />}
      </fieldset>

      <MyButton className="mt-4">{en.nextStep}</MyButton>
    </>
  );
}

const checkOptions = ["Yes", "No"];
