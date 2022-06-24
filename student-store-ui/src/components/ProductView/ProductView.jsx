import React from "react";
import ProductCard from "../ProductCard/ProductCard";

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
      <ProductCard
        product={product}
        productId={productId}
        quantity={0}
        showDescription
      />
    </div>
  );
};

export default ProductView;
