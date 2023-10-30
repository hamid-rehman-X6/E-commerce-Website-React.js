import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function PageNotFound() {
  const navigation = useNavigate();
  return (
    <div>
      <h1> Error: #404 Page Not Found.</h1>
      <p className="text-for-goback">
        Click here{" "}
        <Link to={navigation(-1)}>
          <span className="GO-BACK-LINK">Product Detail Page</span>
        </Link>{" "}
        to go back the page and accept the Terms & Conditions.
      </p>
    </div>
  );
}
