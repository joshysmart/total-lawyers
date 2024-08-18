import { TFormInputs } from "@/@types";
import { UseFormRegister } from "react-hook-form";

interface CheckBoxCardProps {
  name: keyof TFormInputs;
  option: string;
  register: UseFormRegister<TFormInputs>;
  required?: boolean | string;
}

export default function CheckBoxCard({
  name,
  option,
  register,
  required,
}: CheckBoxCardProps) {
  return (
    <label
      htmlFor={`${name}-${option}`}
      className="flex items-center gap-4 py-3 px-6 border border-[#E1E1E1] rounded cursor-pointer"
    >
      <div className="w-4 h-4 rounded-full border border-[#333333] flex items-center justify-center">
        <input
          type="radio"
          {...register(name, {
            required,
          })}
          value={option}
          id={`${name}-${option}`}
          hidden
          className="peer"
        />
        <div className="peer-checked:bg-blue w-2 h-2 rounded-full" />
      </div>
      <span>{option}</span>
    </label>
  );
}
