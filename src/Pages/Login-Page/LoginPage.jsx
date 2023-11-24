import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../Components/Create-Context/LoginContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase-config";

export function LoginPage() {
  const [user, setUser] = useState([null]);
  const navigate = useNavigate();
  const con = useContext(LoginContext);
  const { isLoggedIn, setIsLoggedIn } = con;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe;
  }, []);

  const defaultvalue = {
    username: "",
    password: "",
  };

  const ValidSchema = yup.object().shape({
    username: yup.string().required("*username is required"),
    password: yup.string().required("*Enter Your Valid Password").max(6),
  });

  const handleSubmit = async (values) => {
    if (values.username && values.password) {
      try {
        const loginUser = await signInWithEmailAndPassword(
          auth,
          values.username,
          values.password
        );
        console.log(loginUser);
        setIsLoggedIn(true);
        navigate(-1);
        console.log("Values:", values);
      } catch (error) {
        console.log("LogIn User Error:", error);
      }
    }
  };

  return (
    <>
      <div>
        <h1
          className="loginpage-main-text"
          style={{ color: "#333333", marginLeft: "50px" }}
        >
          {/* Getting Started with Clothing Products - Login Page */}
        </h1>
      </div>

      <div className="signin-container">
        <h1 className="Login-text">Login</h1>

        <Formik
          initialValues={defaultvalue}
          validationSchema={ValidSchema}
          onSubmit={handleSubmit}
        >
          <Form className="signin-form">
            <span className="signin-span">Email:</span>
            <Field
              type="text"
              placeholder="Enter Username or Email"
              name="username"
              className="input-field"
            />
            <p className="error-message">
              <ErrorMessage name="username" />
            </p>

            <span className="signin-span-password">Password:</span>
            <Field
              type="password"
              placeholder="Enter Your Password"
              name="password"
              className="input-field"
            />
            <p className="error-message">
              <ErrorMessage name="password" />
            </p>

            <button type="submit" className="btn-login">
              Login
            </button>
          </Form>
        </Formik>

        <p className="signin-text">
          Don't have an Account?
          <Link to={"/sign-up"}>
            <b style={{ fontSize: "18px" }}>SignUp</b>
          </Link>
        </p>
      </div>
    </>
  );
}
