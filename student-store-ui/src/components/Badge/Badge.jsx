import React from "react";
import "./Badge.css";

const Badge = ({ label, isActive, onClick }) => {
  const colorClassName = isActive ? "badge active-badge" : "badge";
  return (
    <div className={colorClassName} onClick={onClick}>
      {label}
    </div>
  );
};

export default Badge;
