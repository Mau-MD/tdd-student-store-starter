import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";
import axios from "axios";
import ReactLoading from "react-loading";

import { useState, useEffect } from "react";

export default function App() {
  // State

  const [products, setProducts] = useState([]);
  const [apiProducts, setApiProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // type => {itemId, quantity}
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutForm, setCheckoutForm] = useState({ name: "", email: "" });

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setIsFetching(true);
    try {
      const productsData = await axios.get(
        "https://codepath-store-api.herokuapp.com/store"
      );
      setApiProducts(productsData.data.products);
      setProducts(productsData.data.products);
    } catch {
      setError(true);
    }
    setIsFetching(false);
  };

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
        (product) => product.itemId !== productId
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

  const handleOnSubmitCheckoutForm = async () => {
    try {
      const productsData = await axios.post(
        "https://codepath-store-api.herokuapp.com/store",
        {
          user: {
            name: checkoutForm.name,
            email: checkoutForm.email,
          },
          shoppingCart,
        }
      );
      setShoppingCart([]);
      setCheckoutForm({ name: "", email: "" });
      return productsData;
    } catch (err) {
      return null;
    }
  };

  const searchItems = (query) => {
    return apiProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSearch = (query) => {
    const filteredItems = searchItems(query);
    setProducts(filteredItems);
  };

  const handleCategoryChange = (category, query) => {
    // We need to filter both category and query
    setSelectedCategory(category);
    const filteredItems = searchItems(query);

    if (category === "all") {
      setProducts(filteredItems);
      return;
    }

    const finalFilteredItems = filteredItems.filter(
      (item) => item.category === category
    );
    console.log(filteredItems, finalFilteredItems);
    setProducts(finalFilteredItems);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <div className="main-container">
            {isFetching ? (
              <div className="loading-container">
                <ReactLoading
                  height={"50px"}
                  width={"50px"}
                  color={"#9E5252"}
                  type={"spin"}
                />
              </div>
            ) : (
              <>
                <Sidebar
                  isOpen={isOpen}
                  shoppingCart={shoppingCart}
                  products={products}
                  checkoutForm={checkoutForm}
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                  handleOnToggle={handleOnToggle}
                />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Home
                        handleSearch={handleSearch}
                        products={products}
                        shoppingCart={shoppingCart}
                        handleAddItemToCart={handleAddItemToCart}
                        handleRemoveItemToCart={handleRemoveItemFromCart}
                        handleCategoryChange={handleCategoryChange}
                        selectedCategory={selectedCategory}
                      />
                    }
                  />
                  <Route
                    path="/products/:productId"
                    element={<ProductDetail />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </>
            )}
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}
