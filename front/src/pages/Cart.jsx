import SubTitle from "../components/SubTitle";
import CartTable from "../components/cart/CartTable";
import '../css/cart.css'

export default function Cart () {

     return (
          <div className="content">
               <SubTitle title="Cart"/>

               <h4 className="cart-empty">Empty</h4>

               <CartTable/>
          </div>
     )
}