import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: "",
  detail:"",
  messageCount: 0
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
    setMessageCount: (state, action) => { 
      state.messageCount = action.payload;
    }
  },
});

export const setToken = authSlice.actions.setToken;
export const setUser = authSlice.actions.setUser;
export const setDetail = authSlice.actions.setDetail;
export const setMessageCount = authSlice.actions.setMessageCount;


const AuthSlice = authSlice.reducer;
export default AuthSlice;
