import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { removefromCart } from "../Redux/Cart-Redux/cartAction";

export default function AddtoCart() {
  const cartItems = useSelector((state) => state.cart);
  const quantities = useSelector((state) => state.quantities);
  const dispatch = useDispatch();

  // Calculate the total bill and initialize it to 0
  const [totalBill, setTotalBill] = useState(0);

  const handleremovecart = () => {
    dispatch(removefromCart());
  };

  const calculateTotalBill = () => {
    // return cart.reduce((total, item) => total + item.price * quantity, 0);
    const total = cartItems.reduce((acc, item, index) => {
      return acc + item.price * quantities[index];
    }, 0);
    return total;
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <h1
          style={{
            textAlign: "center",
            marginTop: "15%",
            fontSize: "4rem",
            color: "purple",
          }}
        >
          Your cart is empty.
        </h1>
      ) : (
        <div>
          <h1 className="cart-items-heading">Cart Items: </h1>

          {cartItems.map((item, index) => (
            <div key={index}>
              <div className="cart-wrapper-1">
                <h3> PRODUCT</h3>
                <h3>PRICE</h3>
                <h3>QUANTITY</h3>
                <h3>TOTAL BILL</h3>
              </div>

              <div className="cart-wrapper-2">
                <img src={item.image} className="cart-img" />
                <h3 className="cart-price"> ${item.price}</h3>
                <h3 className="cart-quantity">{quantities[index]}</h3>
                <h3 className="cart-item-bill">
                  ${item.price * quantities[index]}
                </h3>
              </div>
              <h3>Total Bill: ${calculateTotalBill()}</h3>
              {/* <h3>Total Bill: ${calculateTotalBill()}</h3> */}

              <button className="btn-cart-remove" onClick={handleremovecart}>
                <FontAwesomeIcon icon={faXmark} className="cart-icon" />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

// function calculateTotalBill(cart, quantity) {
//   return cart.reduce((total, item) => total + item.price * quantity, 0);
// }
