import React, { useState } from "react";
import Product from "../components/Product";

export default function Shop() {
  const [filter, setFilter] = useState("all");

  function handleChange(type) {
    setFilter(type);
  }

  return (
    <div className="shop-wrapper">
      <div className="filter-buttons">
        <button
          onClick={() => handleChange("all")}
          className={filter === "all" ? "active" : "shop-category"}
        >
          All
        </button>
        <button
          onClick={() => handleChange("parfum")}
          className={filter === "parfum" ? "active" : "shop-category"}
        >
          Parfum
        </button>
        <button
          onClick={() => handleChange("candle")}
          className={filter === "candle" ? "active" : "shop-category"}
        >
          Candle
        </button>
      </div>

      <div className="product-all-wrapper">
        <Product name={filter} />
      </div>
    </div>
  );
}
