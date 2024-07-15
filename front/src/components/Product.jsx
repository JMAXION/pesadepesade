import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../css/product.css"; // CSS 파일을 임포트합니다
import AddToCartModal from "./AddToCartModal";
import { Link } from "react-router-dom";

export default function Product({ name }) {
  const [item, setItem] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productThumbnailRef = useRef(null);

  const url = "http://127.0.0.1:8080/product";
  console.log("아이템", item);

  useEffect(() => {
    axios({
      method: "POST",
      url: url,
      data: { type: name },
    }).then((result) => setItem(result.data));
  }, [name]);

  useEffect(() => {
    // Check if jQuery and ripples plugin are loaded
    if (productThumbnailRef.current && window.$ && $.fn.ripples) {
      $(productThumbnailRef.current).ripples({
        resolution: 256,
        dropRadius: 20,
        perturbance: 0.04,
        zIndex: 9999,
      });
    }

    // Clean up the ripple effect when the component unmounts or 'item' changes
    return () => {
      if (productThumbnailRef.current && window.$ && $.fn.ripples) {
        $(productThumbnailRef.current).ripples("destroy");
      }
    };
  }, [item]); // Ensure effect runs on mount and when 'item' changes

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (!item) {
    return null; // Render null or loading indicator while 'item' is null
  }
  console.log("상점", item);
  return (
    <div className="product-wrapper">
      <h1>{name}</h1>
      <div className="product-thumbnail">
        <ul className="product-list">
          {item.map((obj, index) => (
            <li className="product-list-li" key={index}>
              
                <div className="product-description">
                  <strong className="product-name">
                    <span>{obj.pname}</span>
                  </strong>
                  <span>{obj.pdetail}</span>
                  <span>
                    <br />
                    {obj.pprice.toLocaleString()} krw
                  </span>
                  <br></br>
                  <button
                    className="btn-text-cart"
                    onClick={() => openModal(obj)}
                  >
                    Add to cart
                  </button>
                </div>
              
                <div className="product-inner">
                <Link to={`/shop/detail/${obj.pid}`}>
                  <img
                    src={`http://localhost:8080/${obj.pimage}`}
                    alt={obj.pname}
                    ref={productThumbnailRef}
                  />
              </Link>
                </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal component */}
      {selectedProduct && (
        <AddToCartModal product={selectedProduct} closeModal={closeModal} />
      )}
    </div>
  );
}
