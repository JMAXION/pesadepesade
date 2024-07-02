import React from "react";
import StockModalMap from "./StockModalMap";

export default function StockModal({ isOpen, content, closeModal }) {
  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 600,
          maxWidth: "100%",
          maxHeight: "90%",
          overflowY: "auto",
          backgroundColor: "white",
          zIndex: 400,
        }}
      >
        <div>{content}</div>
        <button onClick={closeModal}>Close</button>
        <StockModalMap />
      </div>
    </div>
  );
}
