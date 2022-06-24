import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductView from "../ProductView/ProductView";
import "./ProductDetail.css";

const ProductDetail = ({ handleAddItemToCart, handleRemoveItemToCart }) => {
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
      const response = await axios.get(
        `https://codepath-store-api.herokuapp.com/store/${productId}`
      );

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
        <ProductView product={product} productId={product.id} quantity={0} />
        <pre>{JSON.stringify(product)}</pre>
      </div>
    );
  };

  return <div className="product-detail">{renderProduct()}</div>;
};

export default ProductDetail;
