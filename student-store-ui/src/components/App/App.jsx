import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";

import { useState } from "react";

export default function App() {
  // State

  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // type => {itemId, quantity}
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutForm, setCheckoutForm] = useState({});

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAddItemToCart = (productId) => {
    const productExists = shoppingCart.find(
      (product) => product.itemId === productId
    );

    // If the product exists, add one to the product quantity
    if (productExists !== undefined) {
      // Add one to the desired product
      const mappedShoppingCart = shoppingCart.map((product) => {
        if (product.itemId === productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      setShoppingCart(mappedShoppingCart);
      return;
    }

    setShoppingCart([...shoppingCart, { itemId: productId, quantity: 1 }]);
  };

  const handleRemoveItemFromCart = (productId) => {
    const productExists = shoppingCart.find(
      (product) => product.itemId === productId
    );

    // We do nothing if the product doesnt exist
    if (productExists === undefined) return;

    let shouldRemoveItem = false;

    // Remove one to the desired product
    const mappedShoppingCart = shoppingCart.map((product) => {
      if (product.itemId === productId) {
        if (product.quantity - 1 === 0) shouldRemoveItem = true;
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });

    // Filter the array to remove the item
    if (shouldRemoveItem) {
      const filteredShoppingCart = shoppingCart.filter(
        (product) => product !== productId
      );
      setShoppingCart(filteredShoppingCart);
      return;
    }
    setShoppingCart(mappedShoppingCart);
  };

  const handleOnCheckoutFormChange = (name, value) => {
    setCheckoutForm({
      ...checkoutForm,
      [name]: value,
    });
  };

  const handleOnSubmitCheckoutForm = () => {
    //TODO
  };

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <div className="main-container">
            <Sidebar
              isOpen={isOpen}
              shoppingCart={shoppingCart}
              products={products}
              checkoutForm={checkoutForm}
              handleOnSubmitFormChange={handleOnCheckoutFormChange}
              handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
              handleOnToggle={handleOnToggle}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    products={products}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemToCart={handleRemoveItemFromCart}
                  />
                }
              />
              <Route path="/products/:productId" element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}
