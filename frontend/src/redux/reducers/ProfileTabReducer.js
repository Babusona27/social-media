import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "Basic Information",
};  
export const ProfileTabReducer = createSlice({
    name: "profileTab",
    initialState,
    reducers: {
        profileTab: (state, action) => {
        state.value = action.payload;
        },
    },
    });
export const { profileTab } = ProfileTabReducer.actions;
export default ProfileTabReducer.reducer;
