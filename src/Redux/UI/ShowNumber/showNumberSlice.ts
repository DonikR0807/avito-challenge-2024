import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { showNumberList } from "../../../utils/filterLists";

const initialState = showNumberList[0];

const showNumberSlice = createSlice({
    name: 'showNumber',
    initialState,
    reducers: {
        showNumberChanged(state, action: PayloadAction<string>) {
            return action.payload;
        }
    }
})

export const { showNumberChanged } = showNumberSlice.actions;

export default showNumberSlice.reducer;