import React from "react";
import { Routes, Route } from "react-router";
import Home from "../../Pages/Home";
import { Products } from "../../Pages/Products";
import { Contact } from "../../Pages/Contact";
import { ProductDetails } from "../../Pages/ProductDetails";
import { NavBar } from "../../Pages/NavBar";
import AddtoCart from "../../Pages/AddtoCart";
import { ContactToCEO } from "../../Pages/ContactToCEO";
import { ContactToHR } from "../../Pages/ContactToHR";
import { PageNotFound } from "../../Pages/PageNotFound";
import { LoginPage } from "../../Pages/Login-Page/LoginPage";
import { Category } from "../../Pages/Categories/Category";
import PrivateRouting from "./PrivateRouting";
import StateLoginContext from "../State-Context/StateLoginContext";
import SignUp from "../../Pages/Sign-Up/SignUp";
import Checkout from "../../Pages/Checkout/Checkout";
export function AppRouting() {
  return (
    <StateLoginContext>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/:category?" element={<Products />} />

        <Route
          path="/contacts"
          element={
            <PrivateRouting>
              <Contact />
            </PrivateRouting>
          }
        >
          <Route path="ceo" element={<ContactToCEO />}></Route>
          <Route path="hr" element={<ContactToHR />}></Route>
        </Route>

        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />

        <Route path="/login-page" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/category" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/cart"
          element={
            <PrivateRouting>
              <AddtoCart />
            </PrivateRouting>
          }
        ></Route>
      </Routes>
    </StateLoginContext>
  );
}
