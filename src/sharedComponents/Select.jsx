import React from "react";
import Label from "../sharedComponents/Label";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Select = ({
  labelFor,
  labelText,
  name,
  id,
  handleChange,
  defaultOption,
  options,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="formElemMy">
      <div className="flexElement" onChange={handleChange}>
        <Label labelFor={labelFor} labelText={labelText} />
        <select
          name={name}
          id={id}
          className="input borders"
          {...register(name)}
        >
          <option id="disabled-value" value={""}>
            {defaultOption}
          </option>
          {options}
        </select>
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

export default Select;
