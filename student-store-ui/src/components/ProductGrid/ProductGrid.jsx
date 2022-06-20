import React from "react";

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) => {
  return (
    <div className="product-grid">
      {products && products.map((product) => <div>Hi</div>)}
    </div>
  );
};

export default ProductGrid;
