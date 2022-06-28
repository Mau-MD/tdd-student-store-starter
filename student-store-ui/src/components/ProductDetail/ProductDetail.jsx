import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../util/constants";
import { getQuantityFromShoppingCart } from "../ProductGrid/ProductGrid";
import ProductView from "../ProductView/ProductView";
import "./ProductDetail.css";

const ProductDetail = ({
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
}) => {
  const { productId } = useParams();

  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!productId) return;
    fetchProductFromId();
  }, [productId]);

  const fetchProductFromId = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/store/${productId}`);

      setProduct(response.data.product);
    } catch (err) {
      setError(true);
    }
    setIsLoading(false);
  };

  const renderProduct = () => {
    if (error)
      return <h1 className="product-detail-error">An Error Has Ocurred</h1>;
    if (isLoading) return <h1 className="loading">Loading...</h1>;
    return (
      <div>
        <ProductView
          product={product}
          productId={product.id}
          quantity={getQuantityFromShoppingCart(shoppingCart, product.id)}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
        />
      </div>
    );
  };

  return <div className="product-detail">{renderProduct()}</div>;
};

export default ProductDetail;
