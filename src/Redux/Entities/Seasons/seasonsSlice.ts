import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  REQUEST_STATUSES,
  RequestStatusesType,
} from "../../../utils/requestStatuses";
import { loadSeasons } from "./thunks/loadSeasons";

export interface Episode {
  number: number;
  name: string;
  airDate: string;
  enName: string;
}

export interface Season {
  number: number;
  episodes: Episode[];
  name: string;
}

export interface SeasonsStateSlice {
  status: RequestStatusesType;
  entities: Season[];
}

const initialState: SeasonsStateSlice = {
  status: REQUEST_STATUSES.idle,
  entities: [],
};

const seasonsSlice = createSlice({
  name: "seasons",
  reducers: {
    seasonsReset(state, action: PayloadAction<undefined>) {
      state.entities = [];
      state.status = REQUEST_STATUSES.idle;
    },
  },
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loadSeasons.pending, (state, action) => {
      state.status = REQUEST_STATUSES.pending;
    });

    builder.addCase(loadSeasons.fulfilled, (state, action) => {
      if (action.payload) {
        state.status = REQUEST_STATUSES.success;
        state.entities = action.payload;
      } else {
        state.status = REQUEST_STATUSES.idle;
        state.entities = [];
      }
    });

    builder.addCase(loadSeasons.rejected, (state, action) => {
      state.status = REQUEST_STATUSES.failed;
    });
  },
});

export const { seasonsReset } = seasonsSlice.actions;

export default seasonsSlice.reducer;
