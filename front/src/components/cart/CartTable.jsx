export default function CartTable() {
  return (
    <div className="cart-table">
      <table className="cart-table-area">
        <thead>
          <tr>
            <th colSpan={2}>product</th>
            <th>quantity</th>
            <th>price</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
