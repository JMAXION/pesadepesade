export default function CartTable() {
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
          <tr>
            <td>
              <img
                src="https://pesade.kr/web/product/tiny/202405/da73aaa2db48537270d1b408e61c495f.png"
                alt=""
              />{" "}
            </td>
            <td></td>
            <td>
              <div>
                <button>-</button>
                <input type="number" name="" id="" />
                <button>+</button>
              </div>
            </td>
            <td></td>
            <td>
              <span className="cart-remove-e">Remove</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
