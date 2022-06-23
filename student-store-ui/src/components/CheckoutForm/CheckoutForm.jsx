import React from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) => {
  return (
    <div className="checkout-form">
      <input
        type="email"
        name="email"
        placeholder="student@codepath.org"
        value={checkoutForm.email}
        onChange={(e) => handleOnCheckoutFormChange("email", e.target.value)}
        className="checkout-form-input"
      />
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={checkoutForm.name}
        onChange={(e) => handleOnCheckoutFormChange("name", e.target.value)}
        className="checkout-form-input"
      />
      <button className="checkout-button" onClick={handleOnSubmitCheckoutForm}>
        Checkout
      </button>
    </div>
  );
};

export default CheckoutForm;
