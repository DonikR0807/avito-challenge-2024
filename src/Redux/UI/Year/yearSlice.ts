import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { yearsList } from "../../../utils/filterLists";

const initialState = yearsList[0];

const yearSlice = createSlice({
    name: 'year',
    initialState,
    reducers: {
        yearChanged(state, action: PayloadAction<string>) {
            return action.payload;
        }
    }
})

export const { yearChanged } = yearSlice.actions;

export default yearSlice.reducer;