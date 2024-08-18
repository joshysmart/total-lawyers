import en from "@/language/en";
import MyButton from "../ui/MyButton";
import { FormState, UseFormRegister } from "react-hook-form";
import { TFormInputs } from "@/@types";
import ErrorText from "../ui/ErrorText";
import PurifiedHtml from "../ui/PurifiedHtml";
import MyInput from "../ui/MyInput";

type StepFiveValues = Pick<
  TFormInputs,
  "firstName" | "lastName" | "telephone" | "email"
>;

interface StepFiveProps {
  register: UseFormRegister<StepFiveValues>;
  errors: FormState<StepFiveValues>["errors"];
}

export default function StepFive({ register, errors }: StepFiveProps) {
  const nameError = errors.firstName?.message || errors.lastName?.message;
  return (
    <>
      <fieldset className="flex flex-col gap-4">
        <label htmlFor="fullName" className="flex gap-2">
          <span>{en.fullNameLabel}</span>
        </label>

        <div className="grid grid-cols-2 gap-6">
          {nameFields.map(({ name, placeholder }) => (
            <MyInput
              key={name}
              name={name}
              placeholder={placeholder}
              register={register}
              type="text"
              required={en.fullNameRequired}
            />
          ))}
        </div>

        {nameError && <ErrorText message={nameError} />}
      </fieldset>

      {otherFields.map(({ name, label, required }) => (
        <fieldset key={name} className="flex flex-col gap-4">
          <label htmlFor={name} className="flex gap-2">
            <span>{label}</span>
          </label>
          <MyInput
            name={name}
            placeholder={label}
            register={register}
            type="text"
            required={required}
          />
        </fieldset>
      ))}

      <MyButton className="mt-4">{en.submitButtonText}</MyButton>

      <div className="lg:block hidden">
        <PurifiedHtml html={en.tosPolicy} />
      </div>
    </>
  );
}

const nameFields: {
  name: keyof StepFiveValues;
  placeholder?: string;
}[] = [
  {
    name: "firstName",
    placeholder: en.firstName,
  },
  {
    name: "lastName",
    placeholder: en.lastName,
  },
];

const otherFields: {
  name: keyof StepFiveValues;
  label: string;
  required: string;
}[] = [
  {
    name: "telephone",
    label: en.telephoneLabel,
    required: en.telephoneRequired,
  },
  {
    name: "email",
    label: en.emailLabel,
    required: en.emailRequired,
  },
];
