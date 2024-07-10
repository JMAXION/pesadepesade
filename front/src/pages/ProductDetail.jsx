import React, { useEffect, useState,useRef } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import GiftCard from "../components/GiftCard";
import ProductInfo from "../components/ProductInfo";
import ProductNotice from '../components/ProductNotice';
import {Link} from 'react-router-dom'
import { getUser } from '../util/localStorage.js';
export default function ProductDetail() {
  let { pid } = useParams();
  const userInfo = getUser();
  const check = useRef();
  const [item, setItem] = useState({});
  const [giftCard, setGiftCard] = useState([]);
  const [result, setResult]=useState({
    userId : userInfo.userId,
    pid : pid,
    qty : 1,
    msg : ''
  })

console.log(userInfo.userId);
  useEffect(() => {
    const url = `http://127.0.0.1:8080/product/detail/${pid}`;
    axios.get(url)
      .then(result => setItem(result.data))
      .catch(error => console.error('Error fetching product detail:', error));
  }, [pid]);

  console.log(item);

  function setSelect() {
    const url = `http://127.0.0.1:8080/product/gift`;
      axios.post(url, giftCard)
      .then(result => setGiftCard(result.data))
      .catch(error => console.error('Error setting gift card:', error));
  }
  console.log(giftCard);

  function choiceSelect(e){
      setResult({...result, msg:e})
  }


  function addOk(){
    console.log(result);
    if(check.current.value === "0"){
      alert("기프트 카드를 선택해 주세요")
      return
    }

      alert("장바구니에 담겼습니다")
      const url = `http://127.0.0.1:8080/cart/add`
      axios({
        method:"POST",
        url:url,
        data:result

      }).then(result=>{
        if(result.data.cnt === 1){
          alert("result OK")
        }
       })
      }
  return (
    <>
    <div className="detail-wrapper">
      
      <div className="detail-div">
        <h2>{item.pname}</h2>
        <p>{item.pdetail}</p>
        <div className="detail-pscentdetail">{item.pscentdetail}</div>
        <div className="detail-pdesc">{item.pdesc}</div>
        <div className="detail-pprice">{item.pprice}krw</div>
        <GiftCard/>
        <ProductInfo prop={item}/>
        <ProductNotice prop={item}/>
      </div>

      <div className="detail-div">
        <img src={item.pimage} alt={item.pname} />
      </div>

      <div className="detail-div">
        <div className="detail-pprice-right">{item.pprice}krw</div>
        <div>
          <select className="select-msg-card" onClick={setSelect} onChange={(e)=>choiceSelect(e.target.value) }ref={check}>
            <option value="0">메세지카드</option>
            {giftCard.map((obj)=>(
              <option value={obj.gift_option}>{obj.gift_option}</option>
            ))}
          </select>
          {userInfo ?(<button type="button" className="detail-add-cart" onClick={addOk}>Add to cart</button>):
          (<Link to="/login"><button type="button" className="detail-add-cart">Add to cart</button></Link>)}
          
        </div>
      </div>
   
    </div>
       <div className="detail-desc-wrapper">
       <div className="detail-desc-img">
       <img src={item.pdetailimage} />
       <div className="detail-desc-txt">
       {item.pdesc}
       </div>
       </div>
   </div>
   </>
  );
}
