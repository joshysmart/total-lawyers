import en from "@/language/en";
import MySelect from "./MySelect";
import CheckBoxCard from "../ui/CheckBoxCard";
import MyButton from "../ui/MyButton";
import {
  FormState,
  UseFormClearErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { TFormInputs } from "@/@types";
import ErrorText from "../ui/ErrorText";

type StepOneValues = Pick<TFormInputs, "age" | "health">;

interface StepOneProps {
  register: UseFormRegister<StepOneValues>;
  errors: FormState<StepOneValues>["errors"];
  setValue: UseFormSetValue<StepOneValues>;
  clearErrors: UseFormClearErrors<StepOneValues>;
}

export default function StepOne({
  register,
  errors,
  setValue,
  clearErrors,
}: StepOneProps) {
  console.log(errors);

  return (
    <>
      <fieldset className="flex flex-col gap-4">
        <label htmlFor="age" className="flex gap-2">
          <span>1.</span>
          <span>{en.questionOne}</span>
        </label>
        <MySelect
          placeholder={en.selectPlaceholder}
          label={en.age}
          options={ageOptions}
          register={register}
          name="age"
          required={en.ageRequired}
          clearErrors={clearErrors}
          setValue={setValue}
        />
        {errors.age?.message && <ErrorText message={errors.age.message} />}
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <label htmlFor="age" className="flex gap-2">
          <span>2.</span>
          <span>{en.questionTwo}</span>
        </label>
        <div className="grid grid-cols-2 gap-6">
          {checkOptions.map((option) => (
            <CheckBoxCard
              key={option}
              name={"health"}
              option={option}
              register={register}
              required={en.healthCheckRequired}
            />
          ))}
        </div>
        {errors.health?.message && (
          <ErrorText message={errors.health.message} />
        )}
      </fieldset>

      <MyButton className="mt-4">{en.nextStep}</MyButton>
    </>
  );
}

const ageOptions = [
  "18-24",
  "25-34",
  "35-44",
  "45-54",
  "55-64",
  "65+",
  "Prefer not to say",
];

const checkOptions = ["Yes", "No"];
