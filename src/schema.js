import * as yup from "yup";

export const schemas = yup.object().shape({
  city1: yup.string().required("City is required"),
  ttrack1: yup.string().required("Technology Track is required"),
  bCamp1: yup.string().required("Bootcamp is required"),

  city2: yup.string().required("City is required"),
  ttrack2: yup.string().required("Technology Track is required"),
  bCamp2: yup.string().required("Bootcamp is required"),

  fullName: yup
    .string()
    .max(50, "There should be maximum 50 characters")
    .required("Full Name is Required"),

  dob: yup
    .date()
    // .default(() => new Date())
    .required("DOB is required"),

  cnic: yup
    .string()
    .required("CNIC is required")
    .matches(/^[0-9]{5}-[0-9]{7}-[0-9]$/, "CNIC is not valid"),

  email: yup.string().email().required("Email is required"),
  mobileNumber: yup
    .string()
    .required("Phone number is Required")
    .matches(/^(0)[0-9]{10}$/, "Phone number is not valid"),

  address: yup.string().required("Address is required"),
});
