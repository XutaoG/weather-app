import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const unsplashApiKey = "NcRQWorj6W8TrGhgzFit9VRW3iy7K8FvCik8-m7radA";

const photoApi = createApi({
	reducerPath: "photo",
	baseQuery: fetchBaseQuery({baseUrl: "https://api.unsplash.com"}),
	endpoints(builder)
	{
		return {
			fetchPhoto: builder.query<string, string>({
				query: (searchTerm) =>
				{
					return {
						method: "GET",
						url: "/search/photos",
						params: {
							query: searchTerm,
							page: 1,
							per_page: 1
						},
						headers: {
							"content-type": "application/json",
							Authorization: `Client-ID ${unsplashApiKey}`
						},
					};
				},
				transformResponse: (response: any) => response.results[0].urls.small
			})
		};
	}
});

export { photoApi }
export const { useFetchPhotoQuery } = photoApi;