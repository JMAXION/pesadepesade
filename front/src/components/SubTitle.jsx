import React from "react";
import "../css/style.css";

export default function SubTitle({ title }) {
  return (
    <div className="sub-title">
      <h2 style={{ fontWeight: "700" }}>{title}</h2>
    </div>
  );
}
