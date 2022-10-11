import React from "react";
import Label from "../sharedComponents/Label";

const Select = ({
  labelFor,
  labelText,
  name,
  id,
  handleTrack,
  defaultOption,
  options,
}) => {
  return (
    <div className="flexElement">
      <Label labelFor="city1" labelText="Select City:" />
      <select
        name={labelFor}
        id={labelText}
        className="input borders"
        onChange={handleTrack}
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
