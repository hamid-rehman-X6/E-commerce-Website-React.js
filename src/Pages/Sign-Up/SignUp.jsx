import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase-config";

export default function SignUp() {
  const navigate = useNavigate();
  const defaultValue = {
    name: "",
    email: "",
    password: "",
    country: "",
    phone: "",
  };

  const validScehma = yup.object().shape({
    name: yup.string().required("*Please Enter your name"),
    email: yup
      .string()
      .required("*Enter your email")
      .email("*Please Enter valid Email."),
    password: yup.string().required("*Please Enter your password").max(6),
    country: yup.string().required("*Enter your Country"),
    phone: yup.string().required("*Enter your valid Phone NUmber."),
  });

  const handleSubmit = async (values) => {
    if (
      values.name &&
      values.email &&
      values.password &&
      values.country &&
      values.phone
    ) {
      try {
        const register = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        // console.log(register);
        await updateProfile(register.user, {
          displayName: values.name,
        });

        navigate("/login-page");
      } catch (error) {
        console.log("Registration Error", error);
      }
    }
  };
  return (
    <>
      <div className="signup-container">
        <h2 className="Signup-text">Sign up</h2>
        <Formik
          initialValues={defaultValue}
          validationSchema={validScehma}
          onSubmit={handleSubmit}
        >
          <Form className="signup-form">
            <Field
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input-field-signup"
            />

            <p className="error-message">
              <ErrorMessage name="name" />
            </p>

            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input-field-signup"
            />
            <p className="error-message">
              <ErrorMessage name="email" />
            </p>

            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input-field-signup"
            />
            <p className="error-message">
              <ErrorMessage name="password" />
            </p>

            <Field
              name="country"
              placeholder="Enter Your Country name"
              type="text"
              className="input-field-signup"
            />
            <p className="error-message">
              <ErrorMessage name="country" />
            </p>

            <Field
              name="phone"
              placeholder="Enter Phone number"
              type="tel"
              className="input-field-signup"
            />
            <p className="error-message">
              <ErrorMessage name="phone" />
            </p>

            <button className="btn-submit" type="submit">
              Submit
            </button>
          </Form>
        </Formik>

        <p className="signup-last-text">
          Already have an account?
          <Link to={"/login-page"}>
            <b style={{ fontSize: "18px" }}>Login</b>
          </Link>
        </p>
      </div>
    </>
  );
}
