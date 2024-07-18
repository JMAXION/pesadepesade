import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCartItemAxios, removeCartItemAxios  } from "../../modules/reducerCartsAxios";

export default function CartTable() {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.carts.list);

  const totalPrice = cartList.reduce(
    (acc, item) => acc + (item.pprice * item.qty), 0
  );

  //  수량 제한 1 ~ 200을 지키는 수량 계산기, delta는 변화하는 값 
  const calcQty = (qty, delta) => Math.max(1, Math.min(qty + delta, 200));

  // 리덕스로 해당하는 cid에 새로운 수량을 전송
  const updateQuantity = (cid, newQty) => {
    dispatch(updateCartItemAxios({ cid, newQty }));
  };

  // 
  const decrease = (cid, qty) => updateQuantity(cid, calcQty(qty, -1));
  const increase = (cid, qty) => updateQuantity(cid, calcQty(qty, 1));
  const handleInputChange = (cid, value) => updateQuantity(cid, calcQty(Number(value), 0));

  const removeItem = (cid, pname, pdetail, giftOption) => {
    const confirmMsg = `
            ${pname}
            ${pdetail}
            [옵션: ${giftOption}]\n\n
      이 상품을 장바구니에서 제거 하시겠습니까?
    `;
    if (window.confirm(confirmMsg)) {
      dispatch(removeCartItemAxios(cid));
    }
  };

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
          {cartList.map((item) => (
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
                  <button className="cart-qty-btn" onClick={() => decrease(item.cid, item.qty)}>-</button>
                  <input
                    className="cart-qty-input"
                    type="number"
                    value={item.qty}
                    onChange={(e) => handleInputChange(item.cid, e.target.value)}
                  />
                  <button className="cart-qty-btn" onClick={() => increase(item.cid, item.qty)}>+</button>
                </div>
              </td>
              <td> 
                <li>{item.pprice.toLocaleString()} krw</li>
                {item.qty === 1 ? null : <li>Sub:{(item.pprice * item.qty).toLocaleString()} krw</li>}
              </td>

              <td>
              <span
                  className="cart-remove-e"
                  onClick={() => removeItem(item.cid, item.pname, item.pdetail, item.gift_option)}
                >Remove</span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="cart-total">
              Total: {totalPrice.toLocaleString()} krw
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
