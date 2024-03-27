import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
	location: string | null;
	selectedDate: string | null;
} = {
	location: null,
	selectedDate: null
};

const userDataSlice = createSlice({
	name: "userData",
	initialState,
	reducers: {
		setLocation: (state, action: PayloadAction<string>) =>
		{
			// payload will contain new location string
			state.location = action.payload;
		},
		setSelectedDate: (state, action: PayloadAction<string>) =>
		{
			// payload will contain new selected date string
			state.selectedDate = action.payload;
		}
	}
});

export const userDataReducer = userDataSlice.reducer;
export const { setLocation, setSelectedDate } = userDataSlice.actions;
