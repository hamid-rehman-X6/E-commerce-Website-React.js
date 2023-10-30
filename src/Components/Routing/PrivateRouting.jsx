import { useContext } from "react";
import LoginContext from "../Create-Context/LoginContext";
import { useLocation } from "react-router";
import { Navigate } from "react-router-dom";

function PrivateRouting({ children }) {
  const location = useLocation();
  const context = useContext(LoginContext);
  const { isLoggedIn } = context;
  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login-page"
        state={{ redirectedFrom: location }}
      ></Navigate>
    );
  }

  return children;
}
export default PrivateRouting;
