import LoginContext from "../Create-Context/LoginContext";
import { useState } from "react";

function StateLoginContext(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </LoginContext.Provider>
  );
}
export default StateLoginContext;
