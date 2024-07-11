import axios from 'axios';
import { useEffect, useState } from 'react';
import { getUser } from '../../util/localStorage.js';

export default function CartTable() {
  
  const userInfo = getUser();
  const [cartItems, setCartItems] = useState([]);  
  const [tp, setTp] = useState(0);
  const url = `http://127.0.0.1:8080/cart`;

  useEffect(() => {
    axios({
      method: "POST",
      url: url,
      data: { userId: userInfo.userId }
    }).then(result => {
      
      setCartItems(result.data);
    }).catch(error => {
      console.error(error);
    });
  }, [userInfo]); 

  const increase = (index) => {
    const url = `http://127.0.0.1:8080/cart/qtyincrease`
    axios({
      method:'POST',
      url :url,
      data : {cid : cartItems[index].cid}
    }).then(result => {if(result.data.cnt === 1){
      console.log("증가")
    }}) 

    
  };
 



  const decrease = (index) => {
    if(cartItems[index].qty === 1) return
    const url = `http://127.0.0.1:8080/cart/qtydecrease`
    axios({
      method:'POST',
      url :url,
      data : {cid : cartItems[index].cid}
    }).then(result => {if(result.data.cnt === 1){
      console.log("감소")
    }}) 
  };

  return (
    <div className="cart-table">
      <table className="cart-table-area">
        <thead>
          <tr>
            <th className="cart-product">product</th>
            <th className="cart-product-desc"></th>
            <th className="cart-qty">quantity</th>
            <th className="cart-price">price</th>
            <th className="cart-remove">remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems && cartItems.map((item, index) => (
            <tr key={item.id}>
              <td>
                <img
                  src={`http://127.0.0.1:8080/${item.pimage}`}
                  alt=""
                />{" "}
              </td>
              <td>{item.pname}{item.pdetail}<br/><span className="cart-msg-option">[옵션 - {item.gift_option}]</span></td>
             
              <td>
                <div>
                  <button onClick={() => decrease(index)}>-</button>
                  <input type="number" name="" id="" value={item.qty} readOnly />
                  <button onClick={() => increase(index)}>+</button>
                </div>
              </td>
              <td>{item.price}</td>
              <td>
                <span className="cart-remove-e">Remove</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
