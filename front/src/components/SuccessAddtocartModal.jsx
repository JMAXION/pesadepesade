import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default function SuccessAddtocartModal({ closeModal,prop,tp, choice}) {
  const modalBackground = useRef();
  console.log(tp);
  const handleCloseModal = () => {
    closeModal(); // 부모 컴포넌트에서 전달받은 closeModal 함수를 호출하여 부모 모달을 닫습니다.
  };

  return (
    <>

      <div className="modal-container" ref={modalBackground} onClick={(e) => {
        if (e.target === modalBackground.current) {
          handleCloseModal();
        }
      }}>
        <div className="modal-content">
          <p>상품을 장바구니에 추가했습니다.</p>
          <span className="cart-modal-close-btn"  onClick={handleCloseModal}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <ul>
        <li>{prop.pname} x {choice.qty}개</li>
        <li>총 금액 : {tp.toLocaleString()}원</li>
        <li><img className="cart-result-img" src={prop.pimage} alt="" /></li>

        <li><button className="modal-keep-shopping" onClick={handleCloseModal}>계속 쇼핑하기</button></li>
        <Link to="/cart"><li><button className="modal-go-cart" >장바구니로 가기</button></li></Link>
        </ul>
        </div>
      </div>
    </>
  );
}
