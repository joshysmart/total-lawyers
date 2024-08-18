import en from "@/language/en";
import CheckBoxCard from "../ui/CheckBoxCard";
import MyButton from "../ui/MyButton";
import { FormState, UseFormRegister } from "react-hook-form";
import { TFormInputs } from "@/@types";
import ErrorText from "../ui/ErrorText";

type StepThreeValues = Pick<
  TFormInputs,
  "socialsBenefits" | "benefitsAttourney"
>;

interface StepThreeProps {
  register: UseFormRegister<StepThreeValues>;
  errors: FormState<StepThreeValues>["errors"];
}

export default function StepThree({ register, errors }: StepThreeProps) {
  return (
    <>
      <fieldset className="flex flex-col gap-4">
        <label htmlFor="socialsBenefits" className="flex gap-2">
          <span>5.</span>
          <span>{en.questionFive}</span>
        </label>
        <div className="grid grid-cols-2 gap-6">
          {checkOptions.map((option) => (
            <CheckBoxCard
              key={option}
              name={"socialsBenefits"}
              option={option}
              register={register}
              required={en.socialsBenefitsRequired}
            />
          ))}
        </div>
        {errors.socialsBenefits?.message && (
          <ErrorText message={errors.socialsBenefits.message} />
        )}
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <label htmlFor="benefitsAttourney" className="flex gap-2">
          <span>6.</span>
          <span>{en.questionSix}</span>
        </label>
        <div className="grid grid-cols-2 gap-6">
          {checkOptions.map((option) => (
            <CheckBoxCard
              key={option}
              name={"benefitsAttourney"}
              option={option}
              register={register}
              required={en.benefitsAttourneyRequired}
            />
          ))}
        </div>
        {errors.benefitsAttourney?.message && (
          <ErrorText message={errors.benefitsAttourney.message} />
        )}
      </fieldset>

      <MyButton className="mt-4">{en.nextStep}</MyButton>
    </>
  );
}

const checkOptions = ["Yes", "No"];
