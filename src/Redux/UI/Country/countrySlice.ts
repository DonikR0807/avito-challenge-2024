import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { countriesList } from "../../../utils/filterLists";

const initalState = countriesList[0];

const countrySlice = createSlice({
    name: 'country',
    initialState: initalState,
    reducers: {
        countryChanged(state, action: PayloadAction<string>) {
            return action.payload;
        }
    }
})

export const { countryChanged } = countrySlice.actions;

export default countrySlice.reducer;