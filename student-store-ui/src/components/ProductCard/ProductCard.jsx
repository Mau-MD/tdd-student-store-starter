import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({
  product,
  productId = 0,
  quantity = 0,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) => {
  return (
    <div className="product-card">
      <div className="product-img-container">
        <Link to={`/products/${productId}`}>
          <img src={product.image} alt={product.name} title={product.name} />
        </Link>
      </div>
      <div className="product-name">{product.name}</div>
      <div className="product-price">${product.price}</div>
      {showDescription && (
        <div className="product-description">{product.description}</div>
      )}
      <div className="product-buttons-container">
        <button className="add" onClick={() => handleAddItemToCart(productId)}>
          Add
        </button>
        <div className="product-quantity">{quantity}</div>
        <button
          className="remove"
          onClick={() => handleRemoveItemToCart(productId)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
