import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import WeatherData from "../../common/WeatherForecast";
import { adjustWeatherDataTime } from "../../hooks";

const initialState: WeatherData = require("../../asset/temp-weather-data.json");
adjustWeatherDataTime(initialState);

const weatherDataSlice = createSlice({
	name: "weatherData",
	initialState: initialState,
	reducers: {
		setWeatherData: (state, action: PayloadAction<WeatherData>) =>
		{
			// Payload contains new WeatherForecast
			return action.payload;
		}
	}
});

export const weatherDataReducer = weatherDataSlice.reducer;
export const { setWeatherData } = weatherDataSlice.actions;