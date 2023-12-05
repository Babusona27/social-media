import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const UserReducer = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    userDetails: (state, action) => {
      state.value = action.payload;
    },
    
    logOut: (state) => {
      state.value = null;
    },
    updateUserDetails: (state, action) => {
      if (state.value) {
        state.value.user = action.payload;
      }
    },
  },
});

export const { userDetails, logOut, updateUserDetails } = UserReducer.actions;

export default UserReducer.reducer;
