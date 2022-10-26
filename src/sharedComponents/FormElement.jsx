import React from "react";
import Input from "./Input";
import Label from "./Label";

const FormElement = ({
  labelFor,
  labelText,
  inputType,
  inputAttr,
  inputPlaceholder,
  isRequired,
}) => {
  return (
    <div className="flexElement">
      <Label labelFor={labelFor} labelText={labelText} />
      <Input
        inputType={inputType}
        inputAttr={inputAttr}
        inputPlaceholder={inputPlaceholder}
        isRequired={isRequired}
      />
    </div>
  );
};

export default FormElement;
