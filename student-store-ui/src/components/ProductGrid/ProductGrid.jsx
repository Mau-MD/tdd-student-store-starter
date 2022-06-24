import React from "react";
import NotFound from "../NotFound/NotFound";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

export function getQuantityFromShoppingCart(shoppingCart, itemId) {
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
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            productId={product.id}
            quantity={getQuantityFromShoppingCart(shoppingCart, product.id)}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
          />
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default ProductGrid;
