     import { Link, useLocation } from "react-router-dom";

export default function Order() {
          const location = useLocation();
          const { orderItem } = location.state || { orderItem: [] };
          console.log('넘어오는 값', orderItem);
     return (
          <div className="order-page">
               <thead>
          <tr>
          <th>주문상품</th>
          </tr>
          </thead>
          <tbody>
          {orderItem.map((item) => (
               <tr key={item.cid}>
                    <td>
                         <Link to={`/shop/detail/${item.pid}`}>
                         <img src={`http://localhost:8080/${item.pimage}`}
                              alt={item.pname}/>
                         </Link>
                    </td>
                    <td>
                         <div>
                              <p>{item.pname}</p>
                              <p>{item.pdetail}</p>
                              <p>[옵션: {item.gift_option}]</p>
                         </div>
                    </td>
               </tr>
                    ))}
                    </tbody>

               </div>
          )
     }