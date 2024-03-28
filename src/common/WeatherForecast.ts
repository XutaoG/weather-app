interface HourlyWeatherData
{
	time: string;
	values: {
		dewPoint: number;
		humidity: number;
		precipitationProbability: number;
		rainAccumulation: number;
		temperature: number;
		temperatureApparent: number;
		uvIndex: number;
		visibility: number;
		weatherCode: number;
		windDirection: number;
		windSpeed: number;
	};
}

interface DailyWeatherData
{
	time: string;
	values: {
		dewPointAvg: number;
		humidityAvg: number;
		precipitationProbabilityAvg: number;
		rainAccumulationSum: number;
		rainIntensityAvg: number;
		snowAccumulationAvg: number;
		snowDepthAvg: number;
		sunriseTime: string;
		sunsetTime: string;
		temperatureApparentAvg: number;
		temperatureApparentMax: number;
		temperatureApparentMin: number;
		temperatureAvg: number;
		temperatureMax: number;
		temperatureMin: number;
		uvIndexAvg: number;
		visibilityAvg: number;
		weatherCodeMax: number;
		windDirectionAvg: number;
		windSpeedAvg: number;
	};
}

interface LocationData
{
	lat: number;
	lon: number;
	name: string;
	type: string;
}

export default interface WeatherData
{
	timelines: {
		hourly: HourlyWeatherData[]; // Hourly weather data
		daily: DailyWeatherData[]; // Daily weather data
	};
	location: LocationData; // Location data
}

export type { HourlyWeatherData, DailyWeatherData, LocationData };