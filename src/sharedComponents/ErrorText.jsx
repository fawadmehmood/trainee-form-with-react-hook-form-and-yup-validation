import React from "react";
import { ErrorMessage } from "@hookform/error-message";

const ErrorText = ({ errors, name, errorMessage }) => {
  console.log(errorMessage);
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ errorMessage }) => (
        <p className="text-xs text-red-500 text-right italic">{errorMessage}</p>
      )}
    />

    // <p className="text-xs text-red-500 text-right italic">{errorMessage}</p>
  );
};

export default ErrorText;
