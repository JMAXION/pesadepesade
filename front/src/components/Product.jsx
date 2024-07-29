import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../css/product.css"; // CSS 파일을 임포트합니다
import AddToCartModal from "./AddToCartModal";
import { Link } from "react-router-dom";
import Pagination from "rc-pagination";
import en_US from 'rc-pagination/lib/locale/en_US';
import "rc-pagination/assets/index.css";

export default function Product({ name }) {
  const [items, setItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const productThumbnailRef = useRef(null);

  const url = "http://127.0.0.1:8080/product";

  useEffect(() => {
    axios({
      method: "POST",
      url: url,
      data: { type: name },
    }).then((result) => setItems(result.data));
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

    // Clean up the ripple effect when the component unmounts or 'items' changes
    return () => {
      if (productThumbnailRef.current && window.$ && $.fn.ripples) {
        $(productThumbnailRef.current).ripples("destroy");
      }
    };
  }, [items]); // Ensure effect runs on mount and when 'items' changes

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (items.length === 0) {
    return null; // Render null or loading indicator while 'items' is empty
  }

  console.log('찍어보기',currentItems);

  return (
    <div className="product-wrapper">
      <h1 className="product-category">{name}</h1>
      <div className="product-thumbnail">
        <ul className="product-list">
          {currentItems.map((obj, index) => (
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
                    className={`product-inner-img ${obj.category_name} ${obj.pdetail} `}
                    src={`http://localhost:8080/${obj.pimage}`}
                    alt={obj.pname}
                    ref={productThumbnailRef}
                  />
                </Link>
                <p className="product-category-name"> {obj.category_name} </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Pagination
        className="product-pagination"
        current={currentPage}
        total={items.length}
        pageSize={itemsPerPage}
        onChange={handlePageChange}
        locale={en_US}
        showLessItems
      />


      {selectedProduct && (
        <AddToCartModal product={selectedProduct} closeModal={closeModal} />
      )}
    </div>
  );
}