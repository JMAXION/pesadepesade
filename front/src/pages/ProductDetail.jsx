import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GiftCard from "../components/GiftCard";
import ProductInfo from "../components/ProductInfo";
import ProductNotice from "../components/ProductNotice";
import { getUser } from "../util/localStorage.js";
import SuccessAddtocartModal from "../components/SuccessAddtocartModal.jsx";
import Review from "../components/Review.jsx";

export default function ProductDetail() {
  let { pid } = useParams();
  const userInfo = getUser();
  const user = userInfo ? userInfo.userId : null;

  const check = useRef();
  const [item, setItem] = useState({});
  const [giftCard, setGiftCard] = useState([]);
  const [result, setResult] = useState({
    userId: user,
    pid: pid,
    pgid: "",
    qty: 1,
  });
  const [resultOk, setResultOk] = useState(false);
  const [showModal, setShowModal] = useState(false); // 모달의 표시 여부 상태
  const navigate = useNavigate(); // useHistory 훅을 사용하여 history 객체에 접근

  useEffect(() => {
    const url = `http://127.0.0.1:8080/product/detail/${pid}`;
    axios
      .get(url)
      .then((result) => setItem(result.data))
      .catch((error) => console.error("Error fetching product detail:", error));
  }, [pid]);

  useEffect(() => {
    const url = `http://127.0.0.1:8080/product/gift`;
    axios
      .post(url)
      .then((result) => setGiftCard(result.data))
      .catch((error) => console.error("Error setting gift card:", error));
  }, []);

  function choiceSelect(e) {
    setResult({ ...result, pgid: e.target.value });
  }

  function addOk() {
    if (check.current.value === "0") {
      alert("기프트 카드를 선택해 주세요");
      return;
    }

    alert("장바구니에 담겼습니다");
    const url = `http://127.0.0.1:8080/cart/add`;
    axios.post(url, result).then((result) => {
      if (result.data.cnt === 1) {
        setResultOk(true); // 결과 상태 업데이트
        setShowModal(true); // 모달 표시
      }
    });
  }

  const closeModal = () => {
    setShowModal(false); // 모달 닫기
    navigate("/shop"); // 모달 닫기 후 홈페이지로 이동
  };

  // const toggleExpand = (qid) => {
  //   setExpandedItems((prev) =>
  //     prev.includes(qid) ? prev.filter((id) => id !== qid) : [...prev, qid]
  //   );
  // };

  return (
    <>
      <div className="detail-wrapper">
        <div className="detail-div">
          <h2>{item.pname}</h2>
          <p>{item.pdetail}</p>
          <div className="detail-pscentdetail ">{item.pscentdetail}</div>
          <div className="detail-pdesc poor-story-regular" style={{ whiteSpace: "pre-wrap;" }}>
            {item.pdesc}
          </div>
          <div className="detail-pprice">{item.pprice}krw</div>
          <GiftCard />
          <ProductInfo prop={item} />
          <ProductNotice prop={item} />
        </div>

        <div className="detail-div">
          <img src={`http://localhost:8080/${item.pimage}`} alt={item.pname} />
        </div>

        <div className="detail-div">
          <div className="detail-pprice-right">{item.pprice}krw</div>
          <div>
            <select
              className="select-msg-card"
              onChange={choiceSelect}
              ref={check}
            >
              <option value="0">메세지카드</option>
              {giftCard.map((obj) => (
                <option key={obj.pgid} value={obj.pgid}>
                  {obj.gift_option}
                </option>
              ))}
            </select>
            {userInfo ? (
              <>
                <button
                  type="button"
                  className="detail-add-cart"
                  onClick={addOk}
                >
                  Add to cart
                </button>
                {resultOk && (
                  <SuccessAddtocartModal
                    choice={result}
                    closeModal={closeModal}
                  />
                )}
              </>
            ) : (
              <Link to="/login">
                <button type="button" className="detail-add-cart">
                  Add to cart
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="detail-desc-wrapper">
        {item.pdetailimage &&
          item.pdetailimage.map((url, index) => (
            <div key={index} className="detail-desc-img">
              <img
                src={`http://localhost:8080/${url}`}
                alt={`Detail ${index + 1}`}
              />
            </div>
          ))}
        <div className="detail-desc-txt">{item.pdesc}</div>
        <Review />
      </div>
    </>
  );
}
