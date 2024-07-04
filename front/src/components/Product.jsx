import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../css/product.css';
import AddToCartModal from "./AddToCartModal";

export default function Product({ name }) {
  const [item, setItem] = useState(null); // 초기값을 null로 설정
  const [selectedProduct, setSelectedProduct] = useState(null); // 선택된 상품 상태 추가

  const url = 'http://127.0.0.1:8080/product';

  useEffect(() => {
    axios({
      method: 'POST',
      url: url,
      data: { type: name }
    }).then(result => setItem(result.data)); // 데이터를 받아와서 item 상태 업데이트
  }, [name]); // name이 바뀔 때마다 useEffect가 실행됨

  if (!item) {
    return null; // item이 null이면 아무것도 렌더링하지 않음
  }

  // Add to cart 버튼 클릭 시 모달 열기
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedProduct(null);
  };

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
                  <span><br />{obj.pprice.toLocaleString()} krw</span><br></br>
                  <button  className="btn-text-cart" onClick={() => openModal(obj)}>Add to cart</button>
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
