import React from "react";
import Badge from "../Badge/Badge";
import "./Categories.css";
import { categories } from "../../util/constants";

const Categories = ({ handleCategoryChange, selectedCategory }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Badge label={category.label} />
      ))}
    </div>
  );
};

export default Categories;
