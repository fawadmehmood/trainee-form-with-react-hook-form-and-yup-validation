import React from "react";
import Label from "../sharedComponents/Label";
import { useFormContext } from "react-hook-form";

const Select = ({
  labelFor,
  labelText,
  name,
  id,
  handleChange,
  defaultOption,
  options,
}) => {
  const { register, unregister } = useFormContext();

  return (
    <div className="flexElement">
      <Label labelFor={labelFor} labelText={labelText} />
      <select name={name} id={id} className="input borders" {...register(name)}>
        <option id="disabled-value" value={""}>
          {defaultOption}
        </option>
        {options}
      </select>
    </div>
  );
};

export default Select;
