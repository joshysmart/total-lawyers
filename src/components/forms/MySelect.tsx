import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TFormInputs } from "@/@types";
import {
  UseFormClearErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

interface MySelectProps {
  placeholder: string;
  options: string[];
  label: string;
  register: UseFormRegister<TFormInputs>;
  name: keyof TFormInputs;
  required?: boolean | string;
  setValue: UseFormSetValue<TFormInputs>;
  clearErrors: UseFormClearErrors<TFormInputs>;
}

export default function MySelect({
  placeholder,
  label,
  options,
  name,
  required,
  setValue,
  register,
  clearErrors,
}: MySelectProps) {
  function handleChange(value: string) {
    setValue(name, value);
    clearErrors(name);
  }
  return (
    <Select onValueChange={(v) => handleChange(v)}>
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder={placeholder}
          {...register(name, {
            required,
          })}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
