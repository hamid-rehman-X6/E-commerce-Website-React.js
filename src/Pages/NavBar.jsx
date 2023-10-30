import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginContext from "../Components/Create-Context/LoginContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export function NavBar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();
  const login = () => {
    if (!isLoggedIn) {
      navigate("/login-page");
    } else {
      setIsLoggedIn(!isLoggedIn);
    }
  };
  return (
    <>
      <div className="Navbar-div">
        <nav>
          <NavLink to="" className="hamid">
            ClassyCloth Co.
          </NavLink>
          {/* <NavLink to="/login-page">Login</NavLink> */}
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/category">Category</NavLink>
          <NavLink to="/contacts">Contact</NavLink>
          <NavLink to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            Cart
          </NavLink>
          <button className="btn-nav-signin-signout" onClick={login}>
            {isLoggedIn ? (
              <FontAwesomeIcon icon={faLock} style={{ marginRight: "5px" }} />
            ) : (
              <FontAwesomeIcon
                icon={faLockOpen}
                style={{ marginRight: "5px" }}
              />
            )}
            {isLoggedIn ? "LogOut" : "LogIn"}
          </button>
        </nav>
      </div>
    </>
  );
}
