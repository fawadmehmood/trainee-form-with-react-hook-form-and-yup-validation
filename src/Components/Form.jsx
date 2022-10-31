import React from "react";
import TraineeDetail from "./TraineeDetail";
import BootCampDetails from "./BootCampDetails";
import AcademicDetails from "./AcademicDetails";
import JobExperience from "./JobExperience";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { schemas } from "../schema";
import { ErrorMessage } from "@hookform/error-message";

const Form = () => {
  const methods = useForm({
    defaultValues: {
      EducationDetail: [
        { degree: "", yog: "", cgpa: "", specialization: "", univeristy: "" },
      ],
    },
    resolver: yupResolver(schemas),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const submitForm = (data) => {
    // reset();
    console.log(data);
  };

  const handleErrors = (errors) => {
    console.log(errors);
  };

  return (
    <div className="bg-white container mx-auto py-6 px-5 xs:px-10 xs:py-7">
      <header className="text-center">
        <h1 className="text-2xl font-medium">Trainee Application Form</h1>
      </header>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitForm, handleErrors)}>
          <BootCampDetails />
          <div className="vGap">
            <div className="borders py-6 text-center flex align-middle justify-center">
              <input
                type="checkbox"
                name="graducationCompleted"
                id="graducationCompleted"
                className="w-4 h-4"
                {...register("graducationCompleted")}
              />
              <label htmlFor="graducationCompleted" className="text-sm ml-4">
                I graduated during or after 2017.{" "}
                <sup className="text-red-500">*</sup>
              </label>
              <ErrorMessage
                errors={errors}
                name={"graducationCompleted"}
                render={({ message }) => (
                  <p className="text-xs text-red-500 text-right italic">
                    {message}
                  </p>
                )}
              />
            </div>
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
