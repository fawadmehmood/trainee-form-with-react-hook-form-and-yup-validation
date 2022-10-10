import React from "react";
import TraineeDetail from "./TraineeDetail";
import BootCampDetails from "./BootCampDetails";

const Form = () => {
  return (
    <div className="bg-white container mx-auto p-10">
      <header className="text-center">
        <h1 className="text-2xl font-medium">Trainee Application Form</h1>
      </header>
      <form>
        <BootCampDetails />
        <TraineeDetail />
      </form>
    </div>
  );
};

export default Form;
