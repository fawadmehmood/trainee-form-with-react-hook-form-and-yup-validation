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
              inputAttr="fullName"
              inputPlaceholder="Enter Full Name"
            />

            <FormElement
              labelFor="dob"
              labelText="Date of Birth"
              inputType="date"
              inputAttr="dob"
            />

            <FormElement
              labelFor="cnic"
              labelText="CNIC"
              inputType="number"
              inputAttr="cnic"
              inputPlaceholder="Enter your CNIC"
            />
          </div>

          <div className="right flexChild">
            <FormElement
              labelFor="email"
              labelText="Email"
              inputType="email"
              inputAttr="email"
              inputPlaceholder="Enter your Email"
            />

            <FormElement
              labelFor="mobileNumber"
              labelText="Mobile"
              inputType="number"
              inputAttr="mobileNumber"
              inputPlaceholder="Enter your Mobile Number"
            />

            <FormElement
              labelFor="address"
              labelText="Address"
              inputType="text"
              inputAttr="address"
              inputPlaceholder="Enter your Address"
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default TraineeDetail;
