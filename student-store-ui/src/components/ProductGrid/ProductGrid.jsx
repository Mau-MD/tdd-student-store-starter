import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

function getQuantityFromShoppingCart(shoppingCart, itemId) {
  const item = shoppingCart.find(
    (cartProduct) => cartProduct.itemId === itemId
  );

  if (!item) return 0;

  return item.quantity;
}

const ProductGrid = ({
  products,
  shoppingCart,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) => {
  return (
    <div className="product-grid">
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            productId={product.id}
            quantity={getQuantityFromShoppingCart(shoppingCart, product.id)}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
          />
        ))}
    </div>
  );
};

export default ProductGrid;
