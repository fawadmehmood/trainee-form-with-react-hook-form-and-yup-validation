import React from "react";

const Input = ({ inputType, inputAttr, inputPlaceholder }) => {
  return (
    <input
      className="input borders"
      type={inputType}
      name={inputAttr}
      id={inputAttr}
      placeholder={inputPlaceholder}
    />
  );
};

export default Input;
