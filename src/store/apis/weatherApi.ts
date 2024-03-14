import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type WeatherForecast from "../../common/WeatherForecast";
import WeatherQueryConfig from "../../common/WeatherQueryConfig";

const apikey = "16WIXaOUlyoPqmOqo1AfOxq9kmx1420w";

const weatherApi = createApi({
	reducerPath: "weather",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.tomorrow.io/v4" }),
	endpoints(builder)
	{
		return {
			fetchWeatherDaily: builder.query<WeatherForecast, WeatherQueryConfig>({
				query: (queryConfig) =>
				{
					return {
						method: "GET",
						url: "/weather/forecast",
						params: {
							location: queryConfig.location,
							timesteps: queryConfig.timesteps,
							units: queryConfig.units
						},
						headers: {
							"content-type": "application/json",
							"apikey": apikey
						}
					};
				}
			})
		};
	}
});

export { weatherApi };
export const { useFetchWeatherDailyQuery } = weatherApi;