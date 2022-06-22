import React from "react";
import { useState } from "react";
import "./Searchbar.css";

const Searchbar = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const textValue = e.target.value;
    setValue(textValue);
    handleSearch(textValue);
  };

  return (
    <input
      type="text"
      className="product-search"
      placeholder="Look for a product"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Searchbar;
