import React from "react";
import Input from "./Input";
import Label from "./Label";

const FormElement = ({
  labelFor,
  labelText,
  inputType,
  inputAttr,
  inputPlaceholder,
}) => {
  return (
    <div className="flex gap-8 items-center">
      <Label labelFor={labelFor} labelText={labelText} />
      <Input
        inputType={inputType}
        inputAttr={inputAttr}
        inputPlaceholder={inputPlaceholder}
      />
    </div>
  );
};

export default FormElement;
