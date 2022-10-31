import React from "react";

const Label = ({ labelFor, labelText, isRequired }) => {
  return (
    <label className="basis-2/5 text-xs lg:text-right" htmlFor={labelFor}>
      {labelText}: {isRequired && <sup className="text-red-500">*</sup>}
    </label>
  );
};

export default Label;
