import React, { useState } from "react";
import FormElement from "../sharedComponents/FormElement";
import Select from "../sharedComponents/Select";
import { companyName } from "../selectUtils1";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

const JobExperience = () => {
  const [selected, setSelected] = useState("no");
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const companiesOption = companyName.map((compName) => {
    return (
      <option key={compName.id} value={compName.id}>
        {compName.compName}
      </option>
    );
  });

  return (
    <div className="vGap">
      <fieldset className="borders p-3">
        <legend className="legendText">Job Experience</legend>
        <div className="flexElement mb-4">
          <p className="text-xs basis-2/5 lg:basis-1/7">
            Have you ever been or are you currently employed?
          </p>
          <div className="flex gap-3">
            <div className="flex items-center">
              <input
                type="radio"
                name="experience"
                id="yes"
                value="yes"
                {...register("experience")}
                checked={selected === "yes"}
                onChange={handleChange}
              />
              <label htmlFor="yes" className="text-xs">
                Yes
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                name="experience"
                id="no"
                value="no"
                {...register("experience")}
                onChange={handleChange}
                checked={selected === "no"}
              />
              <label htmlFor="no" className="text-xs">
                No
              </label>
            </div>
            <ErrorMessage
              errors={errors}
              name="experience"
              render={({ message }) => (
                <p className="text-xs text-red-500 text-right italic">
                  {message}
                </p>
              )}
            />
          </div>
        </div>

        {selected === "yes" && (
          <div className="row">
            <div className="left flexChild">
              <div className="formElemMy">
                <FormElement
                  labelFor="employerName"
                  labelText="Employer Name"
                  inputType="text"
                  name="employerName"
                  inputPlaceholder="Enter Employer Name"
                  isRequired={true}
                />
              </div>

              <div className="formElemMy">
                <FormElement
                  labelFor="jobStart"
                  labelText="Job Start"
                  inputType="date"
                  name="jobStart"
                  isRequired={true}
                />
              </div>

              <Select
                key="companies"
                labelFor="companies"
                labelText="Do you currently work at any of these companies?"
                name="companies"
                id="companies"
                defaultOption="Choose Company"
                options={companiesOption}
              />
            </div>
            <div className="right flexChild">
              <div className="formElemMy">
                <FormElement
                  labelFor="designation"
                  labelText="Designation"
                  inputType="text"
                  name="designation"
                  inputPlaceholder="Enter Designation"
                  isRequired={true}
                />
              </div>

              <div className="formElemMy">
                <FormElement
                  labelFor="jobEnd"
                  labelText="Job End"
                  inputType="date"
                  name="jobEnd"
                  isRequired={true}
                />
              </div>
            </div>
          </div>
        )}
      </fieldset>
    </div>
  );
};

export default JobExperience;
