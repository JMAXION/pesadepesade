import React, { useState, useEffect,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { getUser } from '../util/localStorage.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import SuccessAddtocartModal from './SuccessAddtocartModal.jsx';


export default function AddToCartModal({ product, closeModal }) {
  const userInfo = getUser();
  const history = useNavigate();
  const validationCheck = useRef(null)
  const [choice, setChoice] = useState({
    //addList.userId, addList.pid, addList.pgid, addList.qty
    userId : userInfo? userInfo.userId:'',
    pid : product.pid,
    productName: '',
    messageCard: '[-필수]Options',
    qty: 1, // Initialize qty to 1 instead of 0
  });

  const [tp, setTp] = useState(0); // tp 값을 상태로 관리합니다.
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  // choice.qty가 변경될 때마다 tp 값을 계산하여 업데이트합니다.
  useEffect(() => {
    setTp(choice.qty * product.pprice);
  }, [choice.qty, product.pprice,choice]);

  function handleSelect(e) {
    if (e === '0') {
      // 필수 선택 항목이 선택된 경우
      setChoice({
        productName: '',
        messageCard: '[-필수]Options',
        qty: 0,
      });
      setTp(0); // tp 값을 0으로 초기화합니다.
      alert("필수 선택 항목 입니다");
      return
    } else {
      setChoice({ ...choice, messageCard: e, productName: product.pname });
    }
  }

  function handleQtyIncrease() {
    if (choice.messageCard !== '[-필수]Options') {
      // messageCard가 '[-필수]Options'이 아닌 경우에만 qty를 증가시킵니다.
      setChoice((prevChoice) => ({
        ...prevChoice,
        qty: prevChoice.qty + 1
      }));
    }
  }

  function handleQtyDecrease() {
    if (choice.qty === 1) return;
    if (choice.messageCard !== '[-필수]Options') {
      setChoice((prevChoice) => ({
        ...prevChoice,
        qty: prevChoice.qty - 1
      }));
    }
  }

  const openSuccessModal = () => {
    setSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
    closeModal(); // SuccessAddtocartModal을 닫습니다.
  };

  const handleAddToCart = () => {
    if(validationCheck.current.value === "0"){
      alert("필수 선택 사항 입니다!")
      return
    }
    const url = `http://127.0.0.1:8080/cart/add`;
    if (userInfo) {
      openSuccessModal(); // userInfo가 없으면 SuccessAddtocartModal을 엽니다.
      axios({
        method:"POST",
        url:url,
        data : {userId:choice.userId, pid:product.pid, pgid:choice.messageCard, qty:choice.qty} 
      })
    } else {
      history('/login'); // userInfo가 있으면 로그인 페이지로 이동합니다.
    }
  };

  return (
    <div className="purchase-modal-container">
      <div className="purchase-modal-content">
        <h1 className="purchase-modal-h1">Option</h1>
        <span className="modal-close-btn" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <h3 className="purchase-modal-name">
          {product.pname} <br />
          {product.pdetail}
        </h3>
        <label htmlFor="message-card" className="msg-card">메세지카드
          <select id="message-card" className="purchase-select" onChange={(e) => handleSelect(e.target.value) } ref={validationCheck}>
            <option value="0">[-필수]Options</option>
            <option value="1">#선택안함</option>
            <option value="2">#danke</option>
            <option value="3">#lovelovelove</option>
            <option value="4">#congratulations</option>
            <option value="5">#happy birthday</option>
          </select>
        </label>
        <label htmlFor="check-qty" className="purchase-qty-label">
          수량
          <img className="purchase-qty-minus" src="https://img.echosting.cafe24.com/skin/mobile/common/ico_quantity_down.jpg" alt="" onClick={handleQtyDecrease} />
          <input id="check-qty" className="purchase-qty" type="text" value={choice.qty} readOnly />
          <img className="purchase-qty-plus" src="https://img.echosting.cafe24.com/skin/mobile/common/ico_quantity_up.jpg" alt="" onClick={handleQtyIncrease} />
        </label>
        <br />
        <button className="go-to-cart" onClick={handleAddToCart}>Add to cart</button>
      </div>

      {(choice.messageCard === '[-필수]Options' || choice.qty === 0) && (
        <p className="purchase-total-info">총상품금액(수량) : 0 krw(0개)</p>
      )}
      {choice.messageCard !== '[-필수]Options' && choice.qty > 0 && (
        <p className="purchase-total-info">총상품금액(수량) : {tp.toLocaleString()} krw({choice.qty}개)</p>
      )}

      <button className="modal-close" onClick={closeModal}>close</button>

      {successModalOpen && <SuccessAddtocartModal prop={product} tp={tp} choice={choice} closeModal={closeSuccessModal} />}
    </div>
  );
}
