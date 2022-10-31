import React from "react";
import FormElement from "../sharedComponents/FormElement";

const TraineeDetail = () => {
  return (
    <div className="vGap">
      <fieldset className="borders p-3">
        <legend className="legendText">About Trainee</legend>

        <div className="row">
          <div className="left flexChild">
            <FormElement
              labelFor="fullName"
              labelText="Full Name"
              inputType="text"
              name="fullName"
              inputPlaceholder="Enter Full Name"
              isRequired={true}
            />
            <FormElement
              labelFor="dob"
              labelText="Date of Birth"
              inputType="date"
              name="dob"
              isRequired={true}
            />

            <FormElement
              labelFor="cnic"
              labelText="CNIC"
              inputType="text"
              name="cnic"
              inputPlaceholder="00000-0000000-0"
              isRequired={true}
            />
          </div>

          <div className="right flexChild">
            <FormElement
              labelFor="email"
              labelText="Email"
              inputType="email"
              name="email"
              inputPlaceholder="Enter your Email"
              isRequired={true}
            />

            <FormElement
              labelFor="mobileNumber"
              labelText="Mobile"
              inputType="string"
              name="mobileNumber"
              inputPlaceholder="03XX-XXXXXXX"
              isRequired={true}
            />

            <FormElement
              labelFor="address"
              labelText="Address"
              inputType="text"
              name="address"
              inputPlaceholder="Enter your Address"
              isRequired={true}
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default TraineeDetail;
