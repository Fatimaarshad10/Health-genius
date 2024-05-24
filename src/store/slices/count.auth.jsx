import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messageCount: 0
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setMessageCount: (state, action) => { 
      state.messageCount = action.payload;
    }
  },
});


export const setMessageCount = countSlice.actions.setMessageCount;


const CountSlice = countSlice.reducer;
export default CountSlice;
