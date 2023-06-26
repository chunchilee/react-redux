import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
      // state = [];
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.pay);
      state.splice(index, 1);
    },
    // is bad, have a good idea
    // reset(state, action) {
    // state = [] ，is bad，immer只會偵測到你對state.屬性有變化才會修改，但reducers reset()是要恢復其原狀態
    // 因此不對state進行任何修改，而是讓RTK知道moviesSlice.reducer為 [] empty array
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
