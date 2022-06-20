import * as React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./Sidebar.css";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnSubmitFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
}) {
  return (
    <section className="sidebar">
      <button className="toggle-button" onClick={() => handleOnToggle()}>
        Toggle
      </button>
      {isOpen && (
        <div>
          <ShoppingCart />
        </div>
      )}
    </section>
  );
}
