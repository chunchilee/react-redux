import { configureStore } from "@reduxjs/toolkit";
import { reset } from "./action";
import { addMovie, moviesReducer, removeMovie } from "./Slices/moviesSlice";
import { addSong, removeSong, songsReducer } from "./Slices/songsSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});
// console.log(store);
// console.log(songsSlice);
// console.log(songsSlice.actions);

// store/index.js 為代表所有store redux一切的中間人
export { reset, store, addMovie, removeMovie, addSong, removeSong };


// 手動確認store
// const startingState = store.getState();
// console.log(JSON.stringify(startingState));
// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song!!!"
// });
// const finalState = store.getState();
// console.log(JSON.stringify(finalState));

// RTK
// console.log(songsSlice.actions.addSong("New Song!!!"));
