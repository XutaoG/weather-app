import { configureStore } from "@reduxjs/toolkit";
import { weatherApi, useFetchWeatherDailyQuery } from "./apis/weatherApi";
import { setupListeners } from "@reduxjs/toolkit/query";


const store = configureStore({
	reducer: {
		[weatherApi.reducerPath]: weatherApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
	{
		return getDefaultMiddleware().concat(weatherApi.middleware);
	}
});

setupListeners(store.dispatch);

export default store;
export { useFetchWeatherDailyQuery };