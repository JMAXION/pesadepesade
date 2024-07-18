import { removeCartItem, setCartList,updateCartItem } from '../reducers/cartsReducer.js';
import { axiosGet, axiosPost, axiosDelete } from './reduxAxios.js';

export function cartListAxios({ userId }) {
     const url = 'http://localhost:8080/cart';
     const data = { userId };
 
     return async (dispatch) => {
         const clist = await axiosPost({ url, data });
         dispatch(setCartList({ clist }));
     };
 }
 
 export function updateCartItemAxios({ cid, newQty }) {
     const url = 'http://localhost:8080/cart/update';
     const data = { cid, newQty };
 
     return async (dispatch) => {
         await axiosPost({ url, data });
         dispatch(updateCartItem({ cid, newQty }));
     };
 }
 
 export function removeCartItemAxios(cid) {
     const url = 'http://localhost:8080/cart/remove';
     const data = { cid };
 
     return async (dispatch) => {
         await axiosDelete({url, data });
         dispatch(removeCartItem({ cid }));
     };
 }