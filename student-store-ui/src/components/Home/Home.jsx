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
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="home">
      <Hero />
      <div className="home-container">
        <div className="top-row">
          <Categories />
          <Searchbar />
        </div>
        <ProductGrid
          products={products}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
        />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
