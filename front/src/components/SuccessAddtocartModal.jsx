import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

export default function SuccessAddtocartModal({ closeModal, prop, tp, choice }) {
  const modalBackground = useRef();
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // 한 페이지당 보여줄 아이템 수

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://127.0.0.1:8080/cart`;
        const response = await axios.post(url, { userId: choice.userId });
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };
    fetchData();
  }, [choice.userId,cart]);

  console.log(cart);
  
  const handleCloseModal = () => {
    closeModal();
  };

  // 페이지 변경 시 호출되는 함수
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 현재 페이지에 맞는 아이템들을 가져오는 함수
  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return cart.slice(indexOfFirstItem, indexOfLastItem);
  };

  return (
    <>
      <div className="modal-container" ref={modalBackground} onClick={(e) => {
        if (e.target === modalBackground.current) {
          handleCloseModal();
        }
      }}>
        <div className="modal-content">
          <p className="Add-cart-title">Add to cart</p>
          <span className="cart-modal-close-btn" onClick={handleCloseModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <ul className="image-list"> {/* 가로로 2개씩 나열할 이미지들을 감싸는 ul 요소 */}
            {getCurrentItems().map((obj) => (
              <li key={obj.pid}>
                <img className="cart-result-img" src={`http://127.0.0.1:8080/${obj.pimage}`} alt={obj.pname} />
                <ul className="cart-modal-info">
                  <li>{obj.pname}</li>
                  <li>{obj.pdetail}</li>
                  <li>[옵션 : {obj.gift_option}]</li>
                  <li>{obj.pprice}</li>
                  <li>수량 : {obj.qty}</li>
                </ul>
                
              </li>
             
            ))}
            </ul>

          <div className="pagination-container">
            <Pagination
              className="image-pagination"
              current={currentPage}
              total={cart.length}
              pageSize={itemsPerPage}
              onChange={handlePageChange}
            />
          </div>

          <div className="button-group">
            <button className="modal-keep-shopping" onClick={handleCloseModal}>계속 쇼핑하기</button>
            <Link to="/cart">
              <button className="modal-go-cart">장바구니로 가기</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
