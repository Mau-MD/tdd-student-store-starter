import * as React from "react";
import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import "./Home.css";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="home">
      <Hero />
      <Categories />
      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
    </div>
  );
}
