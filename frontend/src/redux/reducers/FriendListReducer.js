import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: null,
};
export const FriendListReducer = createSlice({
  name: "friendList",
  initialState,
  reducers: {
    friendList: (state, action) => {
      state.value = action.payload;
    },
    removeFriend: (state, action) => {
      const newList = state.value.filter((item) => item._id !== action.payload);
      state.value = newList;
    }
  },
});
export const { friendList, removeFriend } = FriendListReducer.actions;
export default FriendListReducer.reducer;
