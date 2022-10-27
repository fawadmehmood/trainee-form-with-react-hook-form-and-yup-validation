import React from "react";
import FormElement from "../sharedComponents/FormElement";
import { useFormContext } from "react-hook-form";
import ErrorText from "../sharedComponents/ErrorText";

const TraineeDetail = () => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="vGap">
      <fieldset className="borders p-3">
        <legend className="legendText">About Trainee</legend>

        <div className="row">
          <div className="left flexChild">
            {/* <div className="formElemMy"> */}
            <FormElement
              labelFor="fullName"
              labelText="Full Name"
              inputType="text"
              inputAttr="fullName"
              inputPlaceholder="Enter Full Name"
              isRequired={false}
            />
            {/* {errors?.fullName && (
                <ErrorText errorMessage={errors.fullName.message} />
              )} */}
            {/* </div> */}

            {/* <div className="formElemMy"> */}
            <FormElement
              labelFor="dob"
              labelText="Date of Birth"
              inputType="date"
              inputAttr="dob"
            />
            {/* {errors?.dob && <ErrorText errorMessage={errors.dob.message} />} */}
            {/* </div> */}

            {/* <div className="formElemMy"> */}
            <FormElement
              labelFor="cnic"
              labelText="CNIC"
              inputType="text"
              inputAttr="cnic"
              inputPlaceholder="00000-0000000-0"
            />
            {/* {errors?.cnic && <ErrorText errorMessage={errors.cnic.message} />} */}
            {/* </div> */}
          </div>

          <div className="right flexChild">
            {/* <div className="formElemMy"> */}
            <FormElement
              labelFor="email"
              labelText="Email"
              inputType="email"
              inputAttr="email"
              inputPlaceholder="Enter your Email"
            />
            {/* {errors?.email && (
                <ErrorText errorMessage={errors.email.message} />
              )} */}
            {/* </div> */}

            {/* <div className="formElemMy"> */}
            <FormElement
              labelFor="mobileNumber"
              labelText="Mobile"
              inputType="string"
              inputAttr="mobileNumber"
              inputPlaceholder="03XX-XXXXXXX"
            />
            {/* {errors?.mobileNumber && (
                <ErrorText errorMessage={errors.mobileNumber.message} />
              )} */}
            {/* </div> */}

            {/* <div className="formElemMy"> */}
            <FormElement
              labelFor="address"
              labelText="Address"
              inputType="text"
              inputAttr="address"
              inputPlaceholder="Enter your Address"
            />
            {/* {errors?.address && (
                <ErrorText errorMessage={errors.address.message} />
              )} */}
            {/* </div> */}
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default TraineeDetail;
