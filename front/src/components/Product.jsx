import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../css/product.css';
export default function Product({ name }) {
  const [item, setItem] = useState(null); // 초기값을 null로 설정

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

  return (
    <div className="product-wrapper">
    <h1>Product ({name})</h1>

    <div className="product-list">
      {item.map((obj, index) => (
        <div className="product-list-li" key={index}>
          <div className="product-inner">
          <div className="product-description">
              <strong className="product-name">
                <span>
                  {obj.pname} 
                  
                </span><br/>
                <span>
                  {obj.pdetail}
                  
                </span>
              </strong>
            </div>
            <div className="product-thumbnail">
              <img src={obj.pimage} alt={obj.pname} />
            </div>
         
          </div>
        </div>
      ))}
    </div>
  </div>
);
}