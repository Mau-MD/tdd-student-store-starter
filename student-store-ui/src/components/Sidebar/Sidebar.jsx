import * as React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { GiHamburgerMenu } from "react-icons/gi";
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
  const sidebarActiveClassName = isOpen ? "sidebar active" : "sidebar";
  return (
    <section className={sidebarActiveClassName}>
      <button
        className="toggle-button"
        onClick={() => handleOnToggle()}
        aria-label="Toggle Button"
      >
        <GiHamburgerMenu size={20} />
      </button>
      {isOpen && (
        <div>
          <ShoppingCart
            isOpen={isOpen}
            products={products}
            shoppingCart={shoppingCart}
          />
        </div>
      )}
    </section>
  );
}
