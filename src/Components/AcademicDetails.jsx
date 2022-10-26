import React, { useEffect } from "react";
import FormElement from "../sharedComponents/FormElement";
import Select from "react-select";
import { uniOptions } from "../selectUtils1";
import { useForm, useFieldArray } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useFormContext } from "react-hook-form";
import ErrorText from "../sharedComponents/ErrorText";

const AcademicDetails = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  // const { control, register } = useForm({
  //   defaultValues: {
  //     EducationDetail: [
  //       { degree: "", yog: "", cgpa: "", specialization: "", univeristy: "" },
  //     ],
  //   },
  // });
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "EducationDetail", // unique name for your Field Array
  });

  //   useEffect(() => {
  //     append({
  //       degree: "",
  //       yog: "",
  //       cgpa: "",
  //       specialization: "",
  //       univeristy: "",
  //     });
  //   }, []);

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
            <div className="formElemMy">
              <FormElement
                labelFor={`education[${index}].degree`}
                labelText="Degree"
                inputType="text"
                inputAttr={`education[${index}].degree`}
                inputPlaceholder="Enter Degree"
              />
            </div>

            <div className="formElemMy">
              <FormElement
                labelFor={`education[${index}].yog`}
                labelText="Year of Graduation"
                inputType="text"
                inputAttr={`education[${index}].yog`}
                inputPlaceholder="Enter Year of Graduation"
              />
            </div>
          </div>

          <div className="right flexChild">
            <div className="formElemMy">
              <FormElement
                labelFor={`education[${index}].cgpa`}
                labelText="CGPA/PCT"
                inputType="number"
                inputAttr={`education[${index}].cgpa`}
                inputPlaceholder="Enter CGPA/PCT"
              />
            </div>

            <div className="formElemMy">
              <FormElement
                labelFor={`education[${index}].specialization`}
                labelText="Specialization (Bachelor's)"
                inputType="text"
                inputAttr={`education[${index}].specialization`}
                inputPlaceholder="Enter Specialization"
              />
            </div>
          </div>
        </div>

        <div className="flexElement">
          <label
            className="basis-1/7 text-right text-xs"
            htmlFor={`education[${index}].univeristy`}
          >
            University:
          </label>
          <Select
            className="w-full"
            styles={customStyles}
            options={uniOptions}
            isClearable={true}
            id={`education[${index}].univeristy`}
            name={`education[${index}].univeristy`}
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
