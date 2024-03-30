import { configureStore } from "@reduxjs/toolkit";
import { weatherApi, useFetchWeatherDataQuery } from "./apis/weatherApi";
import { cityApi, useFetchCityQuery } from "./apis/cityApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userDataReducer } from "./slices/UserDataSlice";
import
{
	setLocation,
	setSelectedDayIndex,
	setWeatherData,
	setIsFetchingData
} from "./slices/UserDataSlice";

const store = configureStore({
	reducer: {
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

export { useFetchWeatherDataQuery };
export { useFetchCityQuery };
export
{
	setLocation,
	setSelectedDayIndex,
	setWeatherData,
	setIsFetchingData
};