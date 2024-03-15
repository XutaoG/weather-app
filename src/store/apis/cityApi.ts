import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CityQueryConfig from "../../common/CityQueryConfig";
import CityData from "../../common/CityData";

const cityApiKey = "EnskFR0xaV1y0TbnHL2nFg==39QJywEl5Dm7mNvt";

const cityApi = createApi({
	reducerPath: "city",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.api-ninjas.com" }),
	endpoints(builder)
	{
		return {
			fetchCity: builder.query<CityData[], CityQueryConfig>({
				query: (queryConfig) =>
				{
					return {
						method: "GET",
						url: "/v1/city",
						params: {
							name: queryConfig.name,
							limit: queryConfig.limit
						},
						headers: {
							"X-Api-Key": cityApiKey
						}
					};
				}
			})
		};
	}
});

export { cityApi };
export const { useFetchCityQuery } = cityApi;