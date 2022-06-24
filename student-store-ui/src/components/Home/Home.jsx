import * as React from "react";
import About from "../About/About";
import Categories from "../Categories/Categories";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import Searchbar from "../Searchbar/Searchbar";
import "./Home.css";

export default function Home({
  products,
  handleSearch,
  shoppingCart,
  handleAddItemToCart,
  handleRemoveItemToCart,
  handleCategoryChange,
  selectedCategory,
}) {
  return (
    <div className="home">
      <Hero />
      <div className="home-container">
        <div className="top-row">
          <Categories
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
          <Searchbar handleSearch={handleSearch} />
        </div>
        <ProductGrid
          products={products}
          shoppingCart={shoppingCart}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
        />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
