import React, { useState } from "react";
import Product from "../components/Product";

export default function Shop() {
  const [filter, setFilter] = useState("all");
  const aname = ["jomalone", "channel", "bvgari", "gucci"];

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
        {aname.map((item) => (
          <button
            key={item}
            onClick={() => handleChange(item)}
            className={filter === item ? "active" : "shop-category"}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="product-all-wrapper">
        <Product name={filter} />
      </div>
    </div>
  );
}
