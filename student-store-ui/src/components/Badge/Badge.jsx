import React from "react";
import "./Badge.css";

const Badge = ({ label, isActive }) => {
  const colorClassName = isActive ? "badge active-badge" : "badge";
  return <div className={colorClassName}>{label}</div>;
};

export default Badge;
