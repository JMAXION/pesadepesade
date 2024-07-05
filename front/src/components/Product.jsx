// Product.jsx
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import '../css/product.css';
import AddToCartModal from "./AddToCartModal";

export default function Product({ name }) {
  const [item, setItem] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productThumbnailRef = useRef(null);

  const url = 'http://127.0.0.1:8080/product';

  useEffect(() => {
    axios({
      method: 'POST',
      url: url,
      data: { type: name }
    }).then(result => setItem(result.data));
  }, [name]);

  useEffect(() => {
    if (productThumbnailRef.current) {
      $(productThumbnailRef.current).ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
      });
    }
  }, [item]);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (!item) {
    return null;
  }

  return (
    <div className="product-wrapper">
      <h1>{name}</h1>
      <div className="product-thumbnail" ref={productThumbnailRef}>
        <ul className="product-list">
          {item.map((obj, index) => (
            <li className="product-list-li" key={index}>
              <div className="product-description">
                <strong className="product-name">
                  <span>{obj.pname}</span>
                </strong>
                <span>{obj.pdetail}</span>
                <span><br />{obj.pprice.toLocaleString()} krw</span><br></br>
                <button className="btn-text-cart" onClick={() => openModal(obj)}>Add to cart</button>
              </div>
              <div className="product-inner">
                <img src={obj.pimage} alt={obj.pname} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 모달 컴포넌트 */}
      {selectedProduct && (
        <AddToCartModal
          product={selectedProduct}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
