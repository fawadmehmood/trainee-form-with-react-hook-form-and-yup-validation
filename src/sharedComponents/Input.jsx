import React from "react";
import { useFormContext } from "react-hook-form";

const Input = ({ inputType, inputAttr, inputPlaceholder }) => {
  const { register } = useFormContext();

  return (
    <input
      className="input borders"
      type={inputType}
      name={inputAttr}
      id={inputAttr}
      placeholder={inputPlaceholder}
      {...register(inputAttr)}
    />
  );
};

export default Input;
