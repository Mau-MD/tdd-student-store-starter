import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../util/constants";
import ReactLoading from "react-loading";

import "./PurchaseDetails.css";

const PurchaseDetails = () => {
  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!purchaseId) return;
    fetchPurchaseFromId();
  }, [purchaseId]);

  const fetchPurchaseFromId = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/store/purchases/${purchaseId}`
      );
      setPurchase(response.data.purchase);
    } catch {
      setError(true);
    }
    setIsFetching(false);
  };

  return (
    <div className="purchase-detail-container">
      {isFetching ? (
        <div className="purchase-detail-loading-container">
          <ReactLoading
            height={"50px"}
            width={"50px"}
            color={"#9E5252"}
            type={"spin"}
          />
        </div>
      ) : (
        <div className="purchase-card">
          <p className="purchase-date">
            {purchase.createdAt.split("T")[0]} |{" "}
            {purchase.createdAt.split("T")[1].split(".")[0]}
          </p>
          <strong>{purchase.name}</strong>
          <p>{purchase.email}</p>
          <div className="purchase-detail-lines">
            {purchase.receipt.lines &&
              purchase.receipt.lines.map((line) => <p>{line}</p>)}
          </div>
          <p className="purchase-items">{purchase.order.length} items bought</p>
          <p className="purchase-total">
            <strong>Total: </strong>${purchase.total}
          </p>
        </div>
      )}
    </div>
  );
};

export default PurchaseDetails;
