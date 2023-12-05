import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: [],
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
        },
        addComment: (state, action) => {
            let feedList = state.value;
            let feedIndex = feedList.findIndex(f => f._id === action.payload.feedId);
            if (feedIndex >= 0) {
                feedList[feedIndex].comment = action.payload.comment;
            }
        },
        addReaction: (state, action) => {
            let feedList = state.value;
            let feedIndex = feedList.findIndex(f => f._id === action.payload.feedId);
            if (feedIndex >= 0) {
                feedList[feedIndex].reaction = action.payload.reaction;
            }
        }

    },
});
export const { feedList, addFeed, addComment, addReplyComment, addReaction } = FeedListReducer.actions;
export default FeedListReducer.reducer;