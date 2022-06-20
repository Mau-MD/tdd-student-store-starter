import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) => {
  return (
    <div className="product-card">
      <div className="product-name">{product.name}</div>
      <div className="product-price">${product.price}</div>
      {showDescription && (
        <div className="product-description">{product.description}</div>
      )}
      <Link to={`/products/${productId}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <button className="add" onClick={() => handleAddItemToCart(productId)}>
        Add
      </button>
      <button
        className="remove"
        onClick={() => handleRemoveItemToCart(productId)}
      >
        Add
      </button>
      <div className="product-quantity">{quantity}</div>
    </div>
  );
};

export default ProductCard;
