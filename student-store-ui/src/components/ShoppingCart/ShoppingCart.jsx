import React from "react";

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
          No items added to cart yet. Start shopping now!
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
