import React, { useEffect } from "react";
import SubTitle from "../components/SubTitle";
import CartTable from "../components/cart/CartTable";
import "../css/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { cartListAxios } from "../modules/reducerCartsAxios.js";
import { getUser } from "../util/localStorage";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const userId = getUser()?.userId; // Using optional chaining to safely access userId
  const cartList = useSelector((state) => state.carts.list);
  const dispatch = useDispatch();

  console.log('장가', cartList);
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      dispatch(cartListAxios({ userId })).catch((error) => {
        console.error("Error fetching cart list:", error);
      });
    }
  }, [userId, cartList.qty]); 
  
  const handlePlaceOrder = () => {
    navigate("/order", { state: { orderItem: cartList } });
  };
  
  return (
    <div className="content">
      <SubTitle title="Cart" />
      {cartList.length == 0 ? (
        <>
          <h4 className="cart-empty">Empty</h4>
          <Link to={'/shop'}>Continue Shopping</Link>
        </>
      ) : (
        <>
          <CartTable />
          <Link to={'/shop'}>Continue Shopping</Link> <br/>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </>
        
      )}
    </div>
  );
}
