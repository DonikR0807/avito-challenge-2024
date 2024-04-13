import { configureStore } from "@reduxjs/toolkit";
import ageReducer from "./UI/Age/ageSlice";
import showNumberReducer from "./UI/ShowNumber/showNumberSlice";
import yearReducer from "./UI/Year/yearSlice";
import countryReducer from "./UI/Country/countrySlice";
import moviesReducer from "./Entities/Movies/moviesSlice";
import searchedMoviesReducer from "./Entities/SearchedMovies/searchedMoviesSlice";
import currentMovieReducer from "./Entities/CurrentMovie/currentMovieSlice";
import seasonsSliceReducer from "./Entities/Seasons/seasonsSlice";
import postersSliceReducer from "./Entities/Posters/postersSlice";
import reviewsSliceReducer from "./Entities/Reviews/reviewsSlice";

export const store = configureStore({
  reducer: {
    age: ageReducer,
    showNumber: showNumberReducer,
    year: yearReducer,
    country: countryReducer,
    movies: moviesReducer,
    searchedMovies: searchedMoviesReducer,
    currentMovie: currentMovieReducer,
    seasons: seasonsSliceReducer,
    posters: postersSliceReducer,
    reviews: reviewsSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
