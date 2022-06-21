import React from "react";
import Badge from "../Badge/Badge";
import "./Categories.css";

const Categories = () => {
  return (
    <div class="categories-container">
      <Badge label={"Food"} isActive />
      <Badge label={"Cars"} />
      <Badge label={"Technology"} />
      <Badge label={"Food"} />
    </div>
  );
};

export default Categories;
