import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from './searchTypes';

const initialState: SearchState = {
    fromLocation: '',
    toLocation: '',
    fromDate: '',
    toDate: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setFromLocation: (state, action: PayloadAction<{ fromLocation: string }>) => {
            state.fromLocation = action.payload.fromLocation;
        },
        setToLocation: (state, action: PayloadAction<{ toLocation: string }>) => {
            state.toLocation = action.payload.toLocation;
        },
        setFromDate: (state, action: PayloadAction<{ fromDate: string }>) => {
            state.fromDate = action.payload.fromDate;
        },
        setToDate: (state, action: PayloadAction<{ toDate: string }>) => {
            state.toDate = action.payload.toDate;
        },
    },
});

export const { setFromLocation, setToLocation, setFromDate, setToDate } = searchSlice.actions;

export default searchSlice.reducer;
