import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) => {
  return (
    <div className="product-grid">
      {products &&
        products.map((product) => (
          <ProductCard
            showDescription
            product={product}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
          />
        ))}
    </div>
  );
};

export default ProductGrid;
