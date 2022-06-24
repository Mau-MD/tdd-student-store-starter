import React from "react";
import "./Receipt.css";

const Receipt = ({ receipt }) => {
  return (
    <div className="receipt-container">
      <h2>Receipt</h2>
      <div className="receipt-user">
        <p>
          <strong>Name: </strong> {receipt.userInfo.name}
        </p>
        <p>
          <strong>Email: </strong> {receipt.userInfo.email}
        </p>
      </div>
      <div className="receipt-lines">
        {receipt.lines.map((line, idx) => (
          <p key={idx + line}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default Receipt;
