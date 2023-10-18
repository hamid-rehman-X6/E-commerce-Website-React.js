import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="Navbar-div">
        <nav>
          <NavLink to="" className="hamid">
            M.HR
          </NavLink>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contacts">Contact</NavLink>
          {/* <NavLink to="/cart">Cart</NavLink> */}
        </nav>
      </div>
    </>
  );
}
