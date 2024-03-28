import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
	location: string;
	selectedDayIndex: number;
} = {
	location: "New York City, NY",
	selectedDayIndex: 0
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
		setSelectedDayIndex: (state, action: PayloadAction<number>) =>
		{
			// payload will contain new index of the selected day
			state.selectedDayIndex = action.payload;
		}
	}
});

export const userDataReducer = userDataSlice.reducer;
export const { setLocation, setSelectedDayIndex } = userDataSlice.actions;
