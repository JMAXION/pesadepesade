import { createSlice } from "@reduxjs/toolkit";

//1

const initialState = {
  isLogin: false,
  userInfo: null,
};

const memberReducer = createSlice({
  name: "member",
  initialState,
  reducers: {
    setIsLogin(state, action) {
      if (action.payload.cnt === 1) {
        state.isLogin = true;
        state.userInfo = action.payload.userInfo;
      }
    },
    setIsLogout(state) {
      state.isLogin = false;
      state.userInfo = null;
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
      state.isLogin = true;
    },
  },
});

export const { setIsLogin, setIsLogout, setUserInfo } = memberReducer.actions;
export default memberReducer.reducer;
