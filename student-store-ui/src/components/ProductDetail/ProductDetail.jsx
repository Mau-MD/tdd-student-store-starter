import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ handleAddItemToCart, handleRemoveItemToCart }) => {
  const { productId } = useParams();
  return <div className="product-detail">{productId}</div>;
};

export default ProductDetail;
