import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  // 每個reducer都共同擁有的method
  reducers: {
    // state is songs state
    addSong(state, action) {
      // immer
      state.push(action.payload);
    },
    removeSong(state, action) {
      // find action.payload in the index of array
      // action.payload === string, the song we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  // extraReducers(builder) {
  // 此舉是避免錯字發生
  // 'movie/reset' -> movieSlice.actions.reset.toString() -> movieSlice.action.reset
  // builder會去偵測movieSlice.actions.reset有沒有被運行
  // reset is a function // reset() is a action object
  // first argument 依賴moviesSlice is not good
  // builder.addCase(moviesSlice.actions.reset, (state, action) => {
  //   return [];
  // });
  // },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
