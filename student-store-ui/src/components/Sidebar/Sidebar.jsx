import * as React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Sidebar.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Receipt from "../Receipt/Receipt";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
  receipt,
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
          <CheckoutForm
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            receipt={receipt}
          />
          {receipt && (
            <div>
              <Receipt receipt={receipt.purchase.receipt} />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
