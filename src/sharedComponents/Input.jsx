import React from "react";
import { useFormContext } from "react-hook-form";

const Input = ({ inputType, name, inputPlaceholder }) => {
  const { register } = useFormContext();

  return (
    <input
      className="input borders"
      type={inputType}
      name={name}
      id={name}
      placeholder={inputPlaceholder}
      {...register(name)}
    />
  );
};

export default Input;
