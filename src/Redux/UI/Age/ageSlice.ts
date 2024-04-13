import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ageList } from "../../../utils/filterLists";


const initialState = Object.keys(ageList)[0];

const ageSlice = createSlice({
    name: 'age',
    initialState,
    reducers: {
        ageChanged(state, action: PayloadAction<string>) {
            return action.payload;
        }
    }
});

export const { ageChanged } = ageSlice.actions;

export default ageSlice.reducer;