import React from "react";
import Input from "./Input";
import Label from "./Label";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

const FormElement = ({
  labelFor,
  labelText,
  inputType,
  name,
  inputPlaceholder,
  isRequired,
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="formElemMy">
      <div className="flexElement">
        <Label
          labelFor={labelFor}
          labelText={labelText}
          isRequired={isRequired}
        />
        <Input
          inputType={inputType}
          name={name}
          inputPlaceholder={inputPlaceholder}
        />
      </div>

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="text-xs text-red-500 text-right italic">{message}</p>
        )}
      />
    </div>
  );
};

export default FormElement;
