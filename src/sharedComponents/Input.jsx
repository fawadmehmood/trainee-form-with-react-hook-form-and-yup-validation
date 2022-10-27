import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Input = ({ inputType, inputAttr, inputPlaceholder, isRequired }) => {
  const { register, unregister } = useFormContext();

  // useEffect(() => {
  //   if (!isRequired) {
  //     console.log(isRequired);
  //     unregister(inputAttr);
  //   }
  //    else {
  //     register(inputAttr);
  //   }
  // }, [isRequired, unregister]);

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
