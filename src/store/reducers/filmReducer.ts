import { createSlice } from "@reduxjs/toolkit";
import { number } from "prop-types";

interface IInitialState {
  savedFilms: number[];
  favoriteFilms: number[];
}

const initialState: IInitialState = {
  favoriteFilms: [],
  savedFilms: [],
};

const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    addSavedFilm(state, action) {
      state.savedFilms.push(action.payload);
    },
    removeSavedFilm(state, action) {
      state.savedFilms = state.savedFilms.filter((film) => film !== action.payload);
    },
    addFavoriteFilm(state, action) {
      state.favoriteFilms.push(action.payload);
    },
    removeFavoriteFilm(state, action) {
      state.favoriteFilms = state.favoriteFilms.filter((film) => film !== action.payload);
    },
  },
});

export const { addSavedFilm, addFavoriteFilm, removeSavedFilm, removeFavoriteFilm } = filmSlice.actions;
export default filmSlice.reducer;
