import React from "react";

const Label = ({ labelFor, labelText }) => {
  return (
    <label className="basis-2/5 text-right text-xs" htmlFor={labelFor}>
      {labelText}:
    </label>
  );
};

export default Label;
