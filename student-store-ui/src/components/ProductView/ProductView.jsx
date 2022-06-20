import React from "react";

const ProductView = ({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) => {
  return (
    <div className="product-view">
      <h1 className="product-id">Product #{productId}</h1>
      {/* Product Cart */}
    </div>
  );
};

export default ProductView;
