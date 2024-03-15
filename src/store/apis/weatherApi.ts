import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type WeatherData from "../../common/WeatherForecast";
import WeatherQueryConfig from "../../common/WeatherQueryConfig";

const weatherApikey = "16WIXaOUlyoPqmOqo1AfOxq9kmx1420w";

const weatherApi = createApi({
	reducerPath: "weather",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.tomorrow.io" }),
	endpoints(builder)
	{
		return {
			fetchWeatherDaily: builder.query<WeatherData, WeatherQueryConfig>({
				query: (queryConfig) =>
				{
					return {
						method: "GET",
						url: "/v4/weather/forecast",
						params: {
							location: queryConfig.location,
							timesteps: queryConfig.timesteps,
							units: queryConfig.units
						},
						headers: {
							"content-type": "application/json",
							"apikey": weatherApikey
						}
					};
				}
			})
		};
	}
});

export { weatherApi };
export const { useFetchWeatherDailyQuery } = weatherApi;