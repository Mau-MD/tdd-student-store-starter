import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./ShoppingCart.css";

const ShoppingCart = ({ isOpen, products, shoppingCart }) => {
  return (
    <div className="shopping-cart">
      {shoppingCart && shoppingCart.length > 0 ? (
        shoppingCart.map((shoppingCartProduct) => (
          <div>
            <div className="card-product-name">test</div>
            <div className="card-product-quantity">
              {shoppingCartProduct.quantity}
            </div>
          </div>
        ))
      ) : (
        <div className="notification">
          <AiOutlineShoppingCart size={40} />
          <p>No items added to cart yet. Start shopping now!</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
