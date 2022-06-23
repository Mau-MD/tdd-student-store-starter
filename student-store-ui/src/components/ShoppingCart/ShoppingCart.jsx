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

  const total = shoppingCartProducts
    .reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
    .toFixed(2);

  return (
    <div className="shopping-cart">
      <p className="shopping-cart-products-heading">Shopping Cart Products</p>
      {/* <table> */}
      {shoppingCartProducts && shoppingCartProducts.length > 0 ? (
        <>
          <table>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Individual Price</th>
              <th>Total</th>
            </tr>
            {shoppingCartProducts.map((shoppingCartProduct) => (
              <tr className="card-product-container">
                <td className="card-product-name">
                  {shoppingCartProduct.name}
                </td>
                <td className="card-product-quantity">
                  {shoppingCartProduct.quantity}
                </td>
                <td className="card-product-price">
                  ${shoppingCartProduct.price}
                </td>
                <td className="card-product-price">
                  $
                  {(
                    shoppingCartProduct.price * shoppingCartProduct.quantity
                  ).toFixed(2)}
                </td>
              </tr>
            ))}
          </table>
          <div className="subtotal">
            <span className="subtotal-heading">Subtotal:</span>${total}
          </div>
          <div className="total-price">
            <span className="total-heading">Total (8.75% TAX):</span>$
            {(total * 1.0875).toFixed(2)}
          </div>
        </>
      ) : (
        <div className="notification">
          <AiOutlineShoppingCart size={40} />
          <p>No items added to cart yet. Start shopping now!</p>
        </div>
      )}
      {/* </table> */}
    </div>
  );
};

export default ShoppingCart;
