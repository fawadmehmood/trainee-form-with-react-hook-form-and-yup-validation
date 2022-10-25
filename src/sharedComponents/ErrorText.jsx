import React from "react";

const ErrorText = ({ errorMessage }) => {
  return (
    <p className="text-xs text-red-500 text-right italic">{errorMessage}</p>
  );
};

export default ErrorText;
