import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: null,
};
export const FeedListReducer = createSlice({
    name: "feedList",
    initialState,
    reducers: {
        feedList: (state, action) => {
            state.value = action.payload;
        },
        addFeed: (state, action) => {
            state.value = [action.payload, ...state.value];
        }

    },
});
export const { feedList, addFeed } = FeedListReducer.actions;
export default FeedListReducer.reducer;