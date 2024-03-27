import { configureStore } from "@reduxjs/toolkit";
import { weatherApi, useFetchWeatherDailyQuery } from "./apis/weatherApi";
import { cityApi, useFetchCityQuery } from "./apis/cityApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { weatherDataReducer } from "./slices/WeatherDataSlice";
import { setWeatherData } from "./slices/WeatherDataSlice";
import { userDataReducer } from "./slices/UserDataSlice";

const store = configureStore({
	reducer: {
		weatherData: weatherDataReducer,
		userData: userDataReducer,
		[weatherApi.reducerPath]: weatherApi.reducer,
		[cityApi.reducerPath]: cityApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
	{
		return getDefaultMiddleware()
			.concat(weatherApi.middleware)
			.concat(cityApi.middleware);
	}
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { setWeatherData };
export { useFetchWeatherDailyQuery };
export { useFetchCityQuery };