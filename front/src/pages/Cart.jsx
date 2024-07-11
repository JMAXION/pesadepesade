import SubTitle from "../components/SubTitle";
import CartTable from "../components/cart/CartTable";
import '../css/cart.css'
import {Link} from 'react-router-dom'
import { getUser } from '../util/localStorage.js'
const userInfo = getUser()

export default function Cart () {

     return (
          <div className="content">
               <SubTitle title="Cart"/>
               {userInfo ?
               (<CartTable/>):
               (
               <div>
                    <h4 className="cart-empty">Empty</h4>
                    <Link to="/shop" className="cart-go-shop-link"><button className="cart-go-shopping">Continue Shopping</button></Link>
               </div>
               )

               }
          </div>
     )
}