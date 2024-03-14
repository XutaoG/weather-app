interface HourlyWeatherData
{
	time: string;
	values: {
		dewPoint: number;
		humidity: number;
		iceAccumulation: number;
		precipitationProbability: number;
		rainAccumulation: number;
		rainIntensity: number;
		snowAccumulation: number;
		snowDepth: number;
		temperature: number;
		visibility: number;
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
		iceAccumulationAvg: number;
		precipitationProbabilityAvg: number;
		rainAccumulationAvg: number;
		rainIntensityAvg: number;
		snowAccumulationAvg: number;
		snowDepthAvg: number;
		sunriseTime: string;
		sunsetTime: string;
		temperatureAvg: number;
		temperatureMax: number;
		temperatureMin: number;
		visibilityAvg: number;
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

export default interface WeatherForecast
{
	timelines: {
		hourly: HourlyWeatherData[] | null; // Hourly weather data
		daily: DailyWeatherData[] | null; // Daily weather data
	};
	location: LocationData; // Location data
}