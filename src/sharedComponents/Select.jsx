import React from "react";
import Label from "../sharedComponents/Label";

const Select = ({
  labelFor,
  labelText,
  name,
  id,
  handleChange,
  defaultOption,
  options,
}) => {
  return (
    <div className="flexElement">
      <Label labelFor={labelFor} labelText={labelText} />
      <select
        name={name}
        id={id}
        className="input borders"
        onChange={handleChange}
      >
        <option id="disabled-value" value={""}>
          {defaultOption}
        </option>
        {options}
      </select>
    </div>
  );
};

export default Select;
