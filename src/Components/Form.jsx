import React from "react";
import TraineeDetail from "./TraineeDetail";
import BootCampDetails from "./BootCampDetails";
import AcademicDetails from "./AcademicDetails";
import JobExperience from "./JobExperience";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { schemas } from "../schema";

const Form = () => {
  const methods = useForm({
    defaultValues: {
      EducationDetail: [
        { degree: "", yog: "", cgpa: "", specialization: "", univeristy: "" },
      ],
    },
    resolver: yupResolver(schemas),
  });

  const submitForm = (data) => {
    // reset();
    console.log(data);
  };

  const handleErrors = (errors) => {
    console.log(errors);
  };

  return (
    <div className="bg-white container mx-auto p-10">
      <header className="text-center">
        <h1 className="text-2xl font-medium">Trainee Application Form</h1>
      </header>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitForm, handleErrors)}>
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
          <AcademicDetails />
          <JobExperience />

          <input
            type="submit"
            className="borders py-2 px-5 text-sm text-white bg-blue"
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
