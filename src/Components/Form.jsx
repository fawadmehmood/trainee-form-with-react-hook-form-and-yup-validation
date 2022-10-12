import React from "react";
import TraineeDetail from "./TraineeDetail";
import BootCampDetails from "./BootCampDetails";
import FormElement from "../sharedComponents/FormElement";

const Form = () => {
  return (
    <div className="bg-white container mx-auto p-10">
      <header className="text-center">
        <h1 className="text-2xl font-medium">Trainee Application Form</h1>
      </header>
      <form>
        <BootCampDetails />
        <div className="borders text-center py-6 flex align-middle justify-center">
          <input
            type="checkbox"
            name="graducationCompleted"
            id="graducationCompleted"
            className="w-4 h-4"
          />
          <label htmlFor="graducationCompleted" className="text-sm ml-4">
            I graduated during or after 2017.
          </label>
        </div>
        <TraineeDetail />
      </form>
    </div>
  );
};

export default Form;
