import { createSlice } from '@reduxjs/toolkit';


const initialState = {
     list: []
};

const cartsReducer = createSlice({
     name: 'carts',
     initialState,
     reducers: {
          setCartList(state, action) {
               state.list = action.payload.clist;
          },
          updateCartItem(state, action) {
               const { cid, newQty } = action.payload;
               const item = state.list.find(item => item.cid === cid);
               if (item) {
                    item.qty = newQty;
               }
          },
          removeCartItem(state, action) {
               const { cid } = action.payload;
               state.list = state.list.filter(item => item.cid !== cid);
          }
     }
   });
export const { setCartList, updateCartItem,removeCartItem } = cartsReducer.actions;
export default cartsReducer.reducer;
