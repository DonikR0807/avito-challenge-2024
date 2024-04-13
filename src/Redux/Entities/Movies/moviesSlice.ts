import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES, RequestStatusesType } from "../../../utils/requestStatuses";
import { loadCurrentPage } from "./thunks/loadCurrentPage";

export interface Movie {
  id: number,
  name: string | null;
  description: string | null;
  poster: {
    url: string | null,
  };
  year: number | null,
  ageRating: number | null,
}

export interface MovieSliceState {
  status: RequestStatusesType;
  entities: Movie[];
  page: number;
  pages: number;
}

const initialState: MovieSliceState = {
  status: REQUEST_STATUSES.idle,
  entities: [],
  page: 1,
  pages: 0,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    pageChanged(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    pagesChanged(state, action: PayloadAction<number>) {
      state.pages = action.payload;
    },
    pagesReset(state) {
      state.page = 1;
      state.pages = 0;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadCurrentPage.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
    })

    builder.addCase(loadCurrentPage.fulfilled, (state, action) => {
        if (action.payload) {
            const { docs, pages } = action.payload;
            state.entities = docs;
            state.pages = pages;
            state.status = REQUEST_STATUSES.success;
        }
    });
    builder.addCase(loadCurrentPage.rejected, (state) => {
        state.status = REQUEST_STATUSES.failed;
    })
  }
});

export const { pageChanged, pagesChanged, pagesReset } = movieSlice.actions;

export default movieSlice.reducer;