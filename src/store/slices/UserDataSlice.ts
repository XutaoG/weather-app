import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import WeatherData from "../../common/WeatherForecast";
import LocationData from "../../common/LocationData";


const initialWeatherData: WeatherData = require("../../asset/temp-weather-data.json");

const initialState: {
	location: LocationData;
	selectedDayIndex: number;
	weatherData: WeatherData | null;
	isFetchingData: boolean;
} = {
	location: { city: "Orlando", state: "Florida" },
	selectedDayIndex: 0,
	weatherData: initialWeatherData,
	isFetchingData: false
};

const userDataSlice = createSlice({
	name: "userData",
	initialState,
	reducers: {
		setLocation: (state, action: PayloadAction<LocationData>) =>
		{
			// payload will contain new LocationData
			state.location = action.payload;
		},
		setSelectedDayIndex: (state, action: PayloadAction<number>) =>
		{
			// payload will contain new index of the selected day
			state.selectedDayIndex = action.payload;
		},
		setWeatherData: (state, action: PayloadAction<WeatherData>) =>
		{
			// Payload contains new WeatherForecast
			state.weatherData = action.payload;
		},
		setIsFetchingData: (state, action: PayloadAction<boolean>) =>
		{
			// Payload contains new boolean whether is fetching data
			state.isFetchingData = action.payload;
		}
	}
});

export const userDataReducer = userDataSlice.reducer;
export const
	{
		setLocation,
		setSelectedDayIndex,
		setWeatherData,
		setIsFetchingData
	} = userDataSlice.actions;
