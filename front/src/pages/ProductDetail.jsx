import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios'
import GiftCard from "../components/GiftCard";
import ProductInfo from "../components/ProductInfo";
export default function ProductDetail (){
  let {pid} =useParams();
  const [item, setItem]= useState({})
  
  useEffect(()=>{
    const url = `http://127.0.0.1:8080/product/detail/${pid}`
    axios({
      method:"GET",
      url : url,
      data : item

    }).then(result => setItem(result.data))
  },[item])

  console.log(item);


  return (
    <div className="detail-wrapper">
        <div className="detail-div">
            <h2>{item.pname}</h2>
            <p>{item.pdetail}</p>
            <div className="detail-pscentdetail">{item.pscentdetail}</div>
            <div className="detail-pdesc">{item.pdesc}</div>
            <div className="detail-pprice">{item.pprice}krw</div>
            <GiftCard/>
            <ProductInfo prop={item}/>
        </div>

        <div className="detail-div">
          <img src={item.pimage}></img>
        </div>

        <div className="detail-div">
        <h1>adasd</h1>
        </div>
    </div>
  )
}