import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import "./PurchaseHistory.css";

const PurchaseHistory = ({ purchases, handlePurchaseSearch }) => {
  const navigate = useNavigate();

  return (
    <div className="purchase-container">
      <h1>Order History</h1>
      <div className="purchase-searchbar-container">
        <Searchbar handleSearch={handlePurchaseSearch} />
      </div>
      <div className="card-container">
        {purchases &&
          purchases.map((purchase) => (
            <div
              key={purchase.id}
              className="purchase-card"
              onClick={() => navigate(`/purchases/${purchase.id}`)}
            >
              <p className="purchase-date">
                {purchase.createdAt.split("T")[0]} |{" "}
                {purchase.createdAt.split("T")[1].split(".")[0]}
              </p>
              <strong>{purchase.name}</strong>
              <p>{purchase.email}</p>
              <p className="purchase-items">
                {purchase.order.length} items bought
              </p>
              <p className="purchase-total">
                <strong>Total: </strong>${purchase.total}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PurchaseHistory;
