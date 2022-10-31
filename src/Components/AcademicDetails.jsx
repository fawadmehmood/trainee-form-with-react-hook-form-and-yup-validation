import React from "react";
import FormElement from "../sharedComponents/FormElement";
import Select from "react-select";
import { uniOptions } from "../selectUtils";
import { useFieldArray, Controller } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const AcademicDetails = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "EducationDetail", // unique name for your Field Array
  });

  const customStyles = {
    control: (base) => ({
      ...base,
      border: "1px solid #D1D5DB",
      // This line disable the blue border
      boxShadow: "none",
      fontSize: "14px",
      //   color: "#6B7280",
    }),

    singleValue: (provided, state) => ({
      ...provided,
      // const opacity = state.isDisabled ? 0.5 : 1;
      // const transition = 'opacity 300ms';
      color: "#6B7280",

      // return { ...provided, opacity, transition };
    }),
  };

  const educationDetails = fields.map((field, index) => {
    return (
      <div
        className={"academicDetails" + (index > 0 ? " eduField" : "")}
        key={field.id}
      >
        {index > 0 && (
          <div className="py-1 flex justify-end">
            <button type="button" onClick={() => remove(index)}>
              <AiOutlineCloseCircle />
            </button>
          </div>
        )}
        <div className="row">
          <div className="left flexChild">
            <FormElement
              labelFor={`education[${index}].degree`}
              labelText="Degree"
              inputType="text"
              name={`education[${index}].degree`}
              inputPlaceholder="Enter Degree"
              isRequired={true}
            />

            <FormElement
              labelFor={`education[${index}].yog`}
              labelText="Year of Graduation"
              inputType="number"
              name={`education[${index}].yog`}
              inputPlaceholder="Enter Year of Graduation"
              isRequired={true}
            />
          </div>

          <div className="right flexChild">
            <FormElement
              labelFor={`education[${index}].cgpa`}
              labelText="CGPA/PCT"
              inputType="number"
              name={`education[${index}].cgpa`}
              inputPlaceholder="Enter CGPA/PCT"
              isRequired={false}
            />

            <FormElement
              labelFor={`education[${index}].specialization`}
              labelText="Specialization (Bachelor's)"
              inputType="text"
              name={`education[${index}].specialization`}
              inputPlaceholder="Enter Specialization"
              isRequired={false}
            />
          </div>
        </div>

        <div className="formElemMy my-4">
          <div className="flexElement">
            <label
              className="basis-2/5 text-xs lg:basis-1/7 lg:text-right"
              htmlFor={`education[${index}].univeristy`}
            >
              University:<sup className="text-red-500">*</sup>
            </label>

            <Controller
              name={`education[${index}].univeristy`}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  className="w-full"
                  styles={customStyles}
                  options={uniOptions}
                  isClearable={true}
                  id={`education[${index}].univeristy`}
                  placeholder="Choose a university"
                />
              )}
            />
          </div>
          <ErrorMessage
            errors={errors}
            name={`education[${index}].univeristy`}
            render={({ message }) => (
              <p className="text-xs text-red-500 text-right italic">
                {message}
              </p>
            )}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="vGap">
      <fieldset className="borders p-3">
        <legend className="legendText">Academic Detail</legend>

        {educationDetails}

        <div className="row justify-end">
          <button
            type="button"
            className="btn border-2 text-blue font-extrabold border-blue hover:btnHover"
            onClick={() =>
              append({
                degree: "",
                yog: "",
                cgpa: "",
                specialization: "",
                univeristy: "",
              })
            }
          >
            Add More Academic Details
          </button>
        </div>
      </fieldset>
    </div>
  );
};

export default AcademicDetails;
