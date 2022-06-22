import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./ShoppingCart.css";

const ShoppingCart = ({ isOpen, products, shoppingCart }) => {
  const shoppingCartProducts = shoppingCart.map((cartProduct) => {
    // Find the correspondeing product based on the cartProductId
    const product = products.find(
      (product) => product.id === cartProduct.itemId
    );

    // Return a new array with the quantity and all product information
    return { ...product, quantity: cartProduct.quantity };
  });

  return (
    <div className="shopping-cart">
      {shoppingCartProducts && shoppingCartProducts.length > 0 ? (
        shoppingCartProducts.map((shoppingCartProduct) => (
          <div>
            <div className="card-product-name">{shoppingCartProduct.name}</div>
            <div className="card-product-quantity">
              {shoppingCartProduct.quantity}
            </div>
            <div className="card-product-quantity">
              ${shoppingCartProduct.price}
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
