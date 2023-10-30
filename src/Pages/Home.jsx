import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home-page-main-div">
        <img
          className="Home-page-img"
          // src="https://antdisplay.com/pub/media/wysiwyg/CLOTHING_SHOP_5_.png"
          // src="https://antdisplay.com/pub/media/wysiwyg/CLOTHING_SHOP_2__1.png"
          src="https://www.w3schools.com/w3images/jeans.jpg"
          alt="img"
        />

        <div className="image-overlay">
          <h1 className="page-heading">Welcome to Our Shop</h1>
          <Link to="/products">
            <button className="shop-now-btn">Shop Now</button>
          </Link>
        </div>
      </div>

      <h1 className="Subscription-heading">
        Subscription Box to avail Discount
      </h1>
      <div className=" custom-styling">
        <h1 className="sub-subscribe-heading">Subscribe</h1>
        <p>To get special offers and VIP treatment:</p>
        <p>
          <input
            className="custom-input"
            type="text"
            placeholder="Enter e-mail"
            required
          />
        </p>
        <button type="submit" className="custom-button">
          Subscribe
        </button>
      </div>

      <footer className="custom-footer">
        <div className="container">
          <p>
            &copy; 2023 <b>HR Collaboration.</b> All rights reserved by Hamid
            Rehman
          </p>
        </div>
      </footer>
    </>
  );
}
