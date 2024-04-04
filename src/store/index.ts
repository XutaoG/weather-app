import { configureStore } from "@reduxjs/toolkit";
import { weatherApi, useFetchWeatherDataQuery } from "./apis/weatherApi";
import { photoApi, useFetchPhotoQuery } from "./apis/photoApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userDataReducer } from "./slices/UserDataSlice";
import
{
	setLocation,
	setSelectedDayIndex,
	setWeatherData,
	setIsFetchingData,
	setExpandDashboard
} from "./slices/UserDataSlice";

const store = configureStore({
	reducer: {
		userData: userDataReducer,
		[weatherApi.reducerPath]: weatherApi.reducer,
		[photoApi.reducerPath]: photoApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
	{
		return getDefaultMiddleware()
			.concat(weatherApi.middleware)
			.concat(photoApi.middleware);
	}
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { useFetchWeatherDataQuery };
export { useFetchPhotoQuery };
export
{
	setLocation,
	setSelectedDayIndex,
	setWeatherData,
	setIsFetchingData,
	setExpandDashboard
};