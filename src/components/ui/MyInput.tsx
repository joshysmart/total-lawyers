import { TFormInputs } from "@/@types";
import { UseFormRegister, ValidationRule } from "react-hook-form";

interface MyInputProps {
  placeholder?: string;
  register: UseFormRegister<TFormInputs>;
  name: keyof TFormInputs;
  required?: boolean | string;
  pattern?: ValidationRule<RegExp> | undefined;
  type: string;
}

export default function MyInput({
  placeholder,
  name,
  register,
  required,
  pattern,
  type,
}: MyInputProps) {
  return (
    <input
      type={type}
      id={name}
      {...register(name, {
        required,
        pattern,
      })}
      className="border-2 border-[#E1E1E1] rounded px-4 py-3 focus:border-black outline-none"
      placeholder={placeholder}
    />
  );
}
