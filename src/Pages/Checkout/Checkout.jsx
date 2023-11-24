import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { ResetCart } from "../../Redux/Cart-Redux/cartAction";
import { useDispatch } from "react-redux";

export default function Checkout() {
  const dispatch = useDispatch();
  const navigation = useNavigate("");

  const handlesubmit = () => {
    dispatch(ResetCart());
    alert("Your Order is Submitted Successfully.");
    navigation("/products");
  };
  return (
    <>
      <div className="checkout-container">
        <h1>
          <FontAwesomeIcon
            icon={faCreditCard}
            fade
            style={{ marginRight: "5px" }}
          />
          Checkout
        </h1>
        <form className="checkout-form" onSubmit={handlesubmit}>
          <div className="form-group">
            <label htmlFor="cardName">Card Holder Name</label>
            <input
              className="checkout-input"
              type="text"
              id="cardName"
              placeholder="Hamid Rehman"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardNum">Card Number</label>
            <input
              className="checkout-input"
              type="text"
              id="cardNum"
              placeholder="**** **** **** ****"
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="expirationMonth">Expiration Date: Month</label>
              <select id="expirationMonth" required defaultValue="">
                <option value="" disabled>
                  Select Month
                </option>
                <option value="01">01 - January</option>
                <option value="02">02 - February</option>
                <option value="03">03 - March</option>
                <option value="04">04 - April</option>
                <option value="05">05 - May</option>
                <option value="06">06 - June</option>
                <option value="07">07 - July</option>
                <option value="08">08 - August</option>
                <option value="09">09 - September</option>
                <option value="10">10 - October</option>
                <option value="11">11 - November</option>
                <option value="12">12 - December</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="expirationYear">Year</label>
              <select id="expirationYear" required defaultValue="">
                <option value="" disabled>
                  Select Year
                </option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cVV">CVV</label>
            <input
              className="checkout-input"
              type="text"
              id="cVV"
              placeholder="***"
              required
            />
          </div>
          <button className="checkout-button" type="submit">
            Place Order
          </button>
        </form>
      </div>
    </>
  );
}
