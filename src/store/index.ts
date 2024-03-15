import { configureStore } from "@reduxjs/toolkit";
import { weatherApi, useFetchWeatherDailyQuery } from "./apis/weatherApi";
import { cityApi, useFetchCityQuery } from "./apis/cityApi";
import { setupListeners } from "@reduxjs/toolkit/query";


const store = configureStore({
	reducer: {
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
export { useFetchWeatherDailyQuery };
export { useFetchCityQuery };