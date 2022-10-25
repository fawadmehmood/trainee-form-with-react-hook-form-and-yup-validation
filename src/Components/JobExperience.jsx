import React from "react";
import FormElement from "../sharedComponents/FormElement";
import Select from "../sharedComponents/Select";

import { companyName } from "../selectUtils1";

const JobExperience = () => {
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
        <div className="flexElement">
          <p className="text-xs basis-1/7 text-right">
            Have you ever been or are you currently employed?
          </p>
          <div className="flex gap-3">
            <div className="flex">
              <input type="radio" name="experience" id="yes" />
              <label htmlFor="yes" className="text-xs">
                Yes
              </label>
            </div>

            <div className="flex">
              <input type="radio" name="experience" id="no" />
              <label htmlFor="no" className="text-xs">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="left flexChild">
            <FormElement
              labelFor="employerName"
              labelText="Employer Name"
              inputType="text"
              inputAttr="employerName"
              inputPlaceholder="Enter Employer Name"
            />

            <FormElement
              labelFor="jobStart"
              labelText="Job Start"
              inputType="date"
              inputAttr="jobStart"
            />

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
            <FormElement
              labelFor="designation"
              labelText="Designation"
              inputType="text"
              inputAttr="designation"
              inputPlaceholder="Enter Designation"
            />

            <FormElement
              labelFor="jobEnd"
              labelText="Job End"
              inputType="date"
              inputAttr="jobEnd"
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default JobExperience;
