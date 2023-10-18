import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products.JSX";
import Contact from "./Pages/Contact";
import ProductDetails from "./Pages/ProductDetails";
import NavBar from "./Pages/NavBar";
import AddtoCart from "./Pages/AddtoCart";
import ContactToCEO from "./Pages/ContactToCEO";
import ContactToHR from "./Pages/ContactToHR.JSX";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contact />}>
          <Route path="ceo" element={<ContactToCEO />}></Route>
          <Route path="hr" element={<ContactToHR />}></Route>
        </Route>
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<AddtoCart />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
