import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messageCount: 0,
  city: "",
  specialist: "",
  response :null
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setMessageCount: (state, action) => { 
      state.messageCount = action.payload;
    },
    setSearchCriteria: (state, action) => {
      state.city = action.payload.city;
      state.specialist = action.payload.specialist;
      state.response = action.payload.response;
    }
  },
});


export const setMessageCount = countSlice.actions.setMessageCount;
export const setSearchCriteria = countSlice.actions.setSearchCriteria;

const CountSlice = countSlice.reducer;
export default CountSlice;
