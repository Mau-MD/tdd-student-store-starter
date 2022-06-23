import React, { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) => {
  // toBeSubmitted, success, error
  const [state, setState] = useState("toBeSubmitted");

  const handleSubmit = async () => {
    const res = await handleOnSubmitCheckoutForm();
    if (res === null) {
      setState("error");
      return;
    }
    setState("success");
  };

  const renderFeedbackMessage = () => {
    if (state === "success") return <div className="success">Success!</div>;
    if (state === "error")
      return (
        <div className="error">There was an error processing your request</div>
      );
  };

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
      <button className="checkout-button" onClick={() => handleSubmit()}>
        Checkout
      </button>
      {renderFeedbackMessage()}
    </div>
  );
};

export default CheckoutForm;
