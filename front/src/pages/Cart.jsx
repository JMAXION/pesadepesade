import SubTitle from "../components/SubTitle";
import CartTable from "../components/cart/CartTable";
import "../css/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { cartListAxios } from "../modules/reducerCartsAxios.js";
import { getUser } from "../util/localStorage";
import { useEffect } from "react";

export default function Cart() {
  const userId = getUser().userId;
  const cartList = useSelector((state) => state.carts.list);
  const dispatch = useDispatch();

  console.log("dd;", userId);

  useEffect(() => {
    dispatch(cartListAxios({ userId }));
  }, []);

  return (
    <div className="content">
      <SubTitle title="Cart" />
      {!cartList.length ? (
        <h4 className="cart-empty">Empty</h4>
      ) : (
        <CartTable cartList={cartList} />
      )}
    </div>
  );
}
