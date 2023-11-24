import React from "react";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import {
  DecreCartitem,
  IncreCartitem,
  removefromCart,
} from "../Redux/Cart-Redux/cartAction";
import { Link } from "react-router-dom";
export default function AddtoCart() {
  const cartItems = useSelector((state) => state.cart);
  // const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const handleremovecart = () => {
    dispatch(removefromCart());
  };

  let totalBill = 0;

  const handleIncrement = (index) => {
    dispatch(IncreCartitem(index));
  };

  const handleDecrement = (index) => {
    dispatch(DecreCartitem(index));
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
          <h1 className="cart-items-heading">Cart Items </h1>

          <div className="cart-wrapper-1">
            <h3> PRODUCT</h3>
            <h3>UNIT PRICE</h3>
            <h3>QUANTITY</h3>
            <h3>AMOUNT</h3>
          </div>
          {cartItems.map((p, index) => {
            if (p.quantities > 0) {
              const totalQ = p.item.price * p.quantities;

              totalBill += totalQ;

              return (
                <div key={index}>
                  <div className="cart-wrapper-2">
                    <div className="cart-wrapper-3">
                      <img src={p.item.image} className="cart-img" />

                      <h3 className="cart-price"> ${p.item.price}</h3>

                      <div className="cart-quantity-btns-main">
                        <button
                          className="cart-decrement-btn"
                          onClick={() => handleDecrement(index)}
                        >
                          -
                        </button>
                        <h3 className="cart-quantity">{p.quantities}</h3>
                        <button
                          className="cart-increment-btn"
                          onClick={() => handleIncrement(index)}
                        >
                          +
                        </button>
                      </div>

                      <h3 className="cart-item-bill">${totalQ}</h3>
                    </div>
                    <hr style={{ marginTop: "5px" }} />
                  </div>
                  <div className="cart-btn-div">
                    <FontAwesomeIcon
                      icon={faXmarkCircle}
                      className="cart-icon"
                      onClick={handleremovecart}
                      title="Remove Item"
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
          <h3 className="cart-total-bill">
            <b style={{ color: "#406BD0", fontSize: "22px" }}>Total Bill: </b>${" "}
            {totalBill}
            <Link to={"/checkout"}>
              <button className="btn-cart-proceed">Proceed To Checkout</button>
            </Link>
          </h3>
        </div>
      )}
    </>
  );
}
