import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const memberReducer = createSlice({
  name: "member",
  initialState,
  reducers: {
    setIsLogin(state, action) {
      if (action.payload.cnt === 1) {
        state.isLogin = true;
      }
    },
    setIsLogout(state, action) {
      state.isLogin = false;
    },
  },
});

export const { setIsLogin, setIsLogout } = memberReducer.actions;
export default memberReducer.reducer;
