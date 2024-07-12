import { Link } from "react-router-dom";

export default function CartTable({ cartList }) {
  console.log("쌈@뽕한 카트리스트", cartList);
  const totalPrice = cartList.reduce((acc, item) => acc + (item.qty * item.pprice), 0);
  
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
                  <button className="cart-qty-btn">-</button>
                  <input className="cart-qty-input" type="number" value={item.qty} />
                  <button className="cart-qty-btn">+</button>
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
            <td colSpan={5} className="cart-total">Total : {totalPrice.toLocaleString()} krw</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
