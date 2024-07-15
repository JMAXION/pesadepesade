import { Link } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
export default function CartTable({ cartList,userId }) {

  const [cartcontent, setCartcontent] = useState([])
  const totalPrice = cartcontent.reduce(
    (acc, item) => acc +  item.pprice,
    0
  );
  useEffect(()=>{
    const url = `http://127.0.0.1:8080/cart`
    axios({
      method:'POST',
      url:url,
      data : {userId:userId}
    }).then(result=> setCartcontent(result.data))
  })

  function decrease(index){
    const url = `http://127.0.0.1:8080/cart/qtydecrease`
    axios({
      method:'POST',
      url : url,
      data : {cid:cartList[index].cid}

    }).then(result => {if(result.data.cnt === 1){
      console.log("감소");
    }})
  }

  function increase(index){
    const url = `http://127.0.0.1:8080/cart/qtyincrease`
    axios({
      method:'POST',
      url : url,
      data : {cid:cartList[index].cid}

    }).then(result => {if(result.data.cnt === 1){
      console.log("증가");
    }})
  }

  return (
    <div className="cart-table">
      <table className="cart-table-area">
        <thead>
          <tr>
            <th className="cart-product">Product</th>
            <th className="cart-product-desc">Description</th>
            <th className="cart-qty">Quantity</th>
            <th className="cart-price">Price</th>
            <th className="cart-remove">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartcontent.map((item,index) => (
            <tr key={item.cid}>
              <td>
                <Link to={`/shop/detail/${item.pid}`}>
                  <img
                    src={`http://localhost:8080/${item.pimage}`}
                    alt={item.pname}
                  />
                </Link>
              </td>
              <td>
                <div>
                  <p>{item.pname}</p>
                  <p>{item.pdetail}</p>
                  <p>[옵션: {item.gift_option}]</p>
                </div>
              </td>
              <td>
                <div>
                  <button className="cart-qty-btn" onClick={()=>decrease(index)}>-</button>
                  <input
                    className="cart-qty-input"
                    type="number"
                    value={item.qty}
                  />
                  <button className="cart-qty-btn" onClick={()=>increase(index)}>+</button>
                </div>
              </td>
              <td>{item.pprice.toLocaleString()}krw</td>
              <td>
                <span className="cart-remove-e">Remove</span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="cart-total">
              Total : {totalPrice.toLocaleString()} krw
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
