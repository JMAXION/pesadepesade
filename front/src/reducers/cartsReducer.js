import { createSlice } from '@reduxjs/toolkit';

const initialState = {
     list : []

}

// 리듀서 생성함수
const cartsReducer = createSlice({
     name: 'carts',
     initialState,
     reducers: {
     setCartList(state, action) {
          state.list = action.payload.clist
          }
     }
});

export const { setCartList } = cartsReducer.actions;
export default cartsReducer.reducer;
