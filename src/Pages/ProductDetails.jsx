import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.log("Error occurs", error);
      }
    };
    fetchData();
  }, [id]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddtocart = () => {
    const confirmText = window.prompt(
      "Type 'YES' to confirm the order or 'NO' to cancel:"
    );

    if (confirmText) {
      if (confirmText.toUpperCase() === "YES") {
        alert("Your order is confirmed");
        navigation("/cart");
      } else if (confirmText.toUpperCase() === "NO") {
        alert("Order not confirmed.");
        navigation(-1);
      } else {
        alert("Invalid input. Please type 'YES' or 'NO'.");
        navigation(0);
      }
    }
  };
  return (
    <>
      <div className="PD-main-div">
        <div className="PD-child1">
          <img className="PD-imgs" src={product.image} alt="img" />
        </div>

        <div className="PD-child2">
          <h2 className="id">Product-ID #{product.id}</h2>
          <h2>Category : {product.category}</h2>
          <h1 className="title">{product.title}</h1>
          <h1 className="price">${product.price} USD</h1>
          <p className="description">
            <strong>Description : </strong>
            {product.description}
          </p>
        </div>
      </div>

      <div className="quantity-btn">
        <button className="minus-btn" onClick={handleDecrement}>
          -
        </button>
        <p className="center-content">Quantity : {quantity}</p>
        <button className="plus-btn" onClick={handleIncrement}>
          +
        </button>
        <Link to="/cart">
          <button className="Addtocart-btn" onClick={handleAddtocart}>
            Add to Cart
          </button>
        </Link>
      </div>

      <div className="Terms-conditions">
        <h3 className="">Terms & Conditions:</h3>
        <p>
          Please read these Terms and Conditions <b> ("Terms")</b> carefully
          before using our website and purchasing clothing products. By
          accessing or using our website and purchasing our products, you agree
          to be bound by these Terms. If you do not agree to these Terms, please
          do not use our website or purchase our products.
        </p>
        <ol className="order-list">
          <li>
            <b>Acceptance of Terms</b> By accessing or using this website and
            purchasing clothing products, you agree to be bound by these Terms
            and any additional terms incorporated by reference. These Terms may
            be updated, and your continued use of our website and products
            constitutes acceptance of any changes.
          </li>
          <li>
            <b>Use of the Website: </b> You may use this website for personal
            and non-commercial purposes. You may not use this website in any
            manner that violates applicable laws or regulations.
          </li>
          <li>
            <b>Product Information:</b> We make every effort to accurately
            display and describe our clothing products. However, we do not
            warrant that product descriptions or other content on the website
            are accurate, complete, reliable, or error-free.<b> Colors: </b>
            Actual product colors may vary due to variations in computer
            monitors, mobile devices, and settings. We are not responsible for
            color discrepancies.
          </li>
          <li>
            <b>Ordering and Payment: </b> When you place an order on our
            website, you are making an offer to purchase the selected clothing
            products. We may accept or decline your order at our discretion.
            Pricing: Product prices are subject to change without
            notice.Payment: We accept various payment methods, including credit
            cards, debit cards, and other forms of electronic payment. By
            providing payment information, you represent and warrant that you
            have the legal right to use the payment method.
          </li>
          <li>
            <b>Returns and Exchanges</b> Please refer to our Returns and
            Exchanges Policy, which is available on our website, for detailed
            information on our return and exchange procedures.
          </li>
          <li>
            <b>Privacy and Data Security </b> Our Privacy Policy outlines how we
            collect, use, and protect your personal information. By using our
            website and purchasing our products, you consent to the practices
            described in our Privacy Policy.
          </li>
          <li>
            <b>Disclaimer</b> of Warranties All clothing products are provided
            "as is" and "as available" without any warranties, expressed or
            implied. We disclaim all warranties, including but not limited to
            the implied warranties of merchantability and fitness for a
            particular purpose.
          </li>
        </ol>
        <div className="Rjt-Acpt-btn">
          <Link to="/pagenotfound">
            <button
              className="reject"
              onClick={() => navigation("/pagenotfound")}
            >
              Reject
            </button>
          </Link>
          <button
            className="accept"
            onClick={() =>
              alert(
                "Your Terms&Condition is submitted. Now you can buying products Online."
              )
            }
          >
            Accept all
          </button>
        </div>
      </div>
    </>
  );
}
