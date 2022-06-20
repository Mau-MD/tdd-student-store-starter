import * as React from "react";
import Hero from "../Hero/Hero";
import "./Home.css";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="home">
      <Hero />
    </div>
  );
}
