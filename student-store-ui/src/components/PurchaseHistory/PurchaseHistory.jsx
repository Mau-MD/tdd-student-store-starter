import React from "react";
import "./PurchaseHistory.css";

const PurchaseHistory = ({ purchases }) => {
  return (
    <div className="purchase-container">
      <h1>Order History</h1>
      <div className="card-container">
        {purchases &&
          purchases.map((purchase) => (
            <div class="purchase-card">
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
