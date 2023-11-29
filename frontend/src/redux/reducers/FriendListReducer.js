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
  },
});
export const { friendList } = FriendListReducer.actions;
export default FriendListReducer.reducer;
