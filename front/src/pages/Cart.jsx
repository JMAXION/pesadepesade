import React, { useEffect } from 'react';
import SubTitle from "../components/SubTitle";
import CartTable from "../components/cart/CartTable";
import "../css/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { cartListAxios } from "../modules/reducerCartsAxios.js";
import { getUser } from "../util/localStorage";

export default function Cart() {
  const userId = getUser()?.userId; // Using optional chaining to safely access userId
  const cartList = useSelector((state) => state.carts.list);
  const dispatch = useDispatch();

  console.log("User ID:", userId);

  useEffect(() => {
    if (userId) {
      dispatch(cartListAxios({ userId }))
        .catch(error => {
          console.error("Error fetching cart list:", error);
        });
    }
  }, [userId, dispatch]);

  return (
    <div className="content">
      <SubTitle title="Cart" />
      {!cartList ? (
        <h4 className="cart-empty">Empty</h4>
      ) : (
        <CartTable cartList={cartList} userId={userId} />
      )}
    </div>
  );
}
