"use client";
import eye from "@/../public/eye.svg";
import Image from "next/image";
import { useId, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  labelText,
  type,
  children,
  ...props
}) => {
  const inputId = useId();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const originalType = type;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputId} className="text-preset-5 text-Grey-500">
        {labelText}
      </label>
      <div className="relative">
        <input
          id={inputId}
          {...props}
          className="border-1 rounded-lg py-3 px-4 border-Beige-500 w-full"
          type={
            originalType === "password" && !isPasswordVisible
              ? "text"
              : originalType
          }
        />
        {type === "password" && (
          <Image
            src={eye}
            alt="eye icon"
            className="absolute right-7 top-[50%] translate-y-[-50%] cursor-pointer"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
          />
        )}
      </div>

      {children}
    </div>
  );
};
export default Input;
