interface WeatherCode
{
	weatherCode: number,
	svg: string;
	condition: string;
	hasNight: boolean;
}

const weatherCodeMap: WeatherCode[] =
	[
		{
			weatherCode: 0,
			svg: "",
			condition: "Unknown",
			hasNight: false
		},
		{
			weatherCode: 1000,
			svg: "clear",
			condition: "Clear",
			hasNight: true
		},
		{
			weatherCode: 1100,
			svg: "mostly_clear",
			condition: "Mostly clear",
			hasNight: true
		},
		{
			weatherCode: 1101,
			svg: "partly_cloudy",
			condition: "Partly cloudy",
			hasNight: true
		},
		{
			weatherCode: 1102,
			svg: "mostly_cloudy",
			condition: "Mostly cloudy",
			hasNight: false
		},
		{
			weatherCode: 1001,
			svg: "cloudy",
			condition: "Cloudy",
			hasNight: false
		},
		{
			weatherCode: 2100,
			svg: "fog_light",
			condition: "Light fog",
			hasNight: false
		},
		{
			weatherCode: 2000,
			svg: "fog",
			condition: "Fog",
			hasNight: false
		},
		{
			weatherCode: 4000,
			svg: "drizzle",
			condition: "Drizzle",
			hasNight: false
		},
		{
			weatherCode: 4200,
			svg: "rain_light",
			condition: "Light rain",
			hasNight: false
		},
		{
			weatherCode: 4001,
			svg: "rain",
			condition: "Rain",
			hasNight: false
		},
		{
			weatherCode: 4201,
			svg: "rain_heavy",
			condition: "Heavy rain",
			hasNight: false
		},
		{
			weatherCode: 5001,
			svg: "flurries",
			condition: "Flurries",
			hasNight: false
		},
		{
			weatherCode: 5100,
			svg: "snow_light",
			condition: "Light snow",
			hasNight: false
		},
		{
			weatherCode: 5000,
			svg: "snow",
			condition: "Snow",
			hasNight: false
		},
		{
			weatherCode: 5101,
			svg: "snow_heavy",
			condition: "Heavy snow",
			hasNight: false
		},
		{
			weatherCode: 6000,
			svg: "freezing_drizzle",
			condition: "Freezng drizzle",
			hasNight: false
		},
		{
			weatherCode: 6200,
			svg: "freezing_rain_light",
			condition: "Light freezing rain",
			hasNight: false
		},
		{
			weatherCode: 6001,
			svg: "freezing_rain",
			condition: "Freezing rain",
			hasNight: false
		},
		{
			weatherCode: 6201,
			svg: "freezing_rain_heavy",
			condition: "Heavy freezing rain",
			hasNight: false
		},
		{
			weatherCode: 7102,
			svg: "ice_pellets_light",
			condition: "Light ice pellets",
			hasNight: false
		},
		{
			weatherCode: 7000,
			svg: "ice-pellets",
			condition: "Ice pellets",
			hasNight: false
		},
		{
			weatherCode: 7101,
			svg: "ice_pellets_heavy",
			condition: "Heavy ice pellets",
			hasNight: false
		},
		{
			weatherCode: 8000,
			svg: "tstorm",
			condition: "Thunderstorm",
			hasNight: false
		}
	];

export default weatherCodeMap;