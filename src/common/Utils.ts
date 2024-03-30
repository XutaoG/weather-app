import classNames from "classnames";
import weatherCodeMap from "./WeatherCodeMap";
import { twMerge } from "tailwind-merge";
import WeatherData from "./WeatherForecast";
import LocationData from "./LocationData";

const convertHourToImperial = (hour: number) =>
{
	if (hour === 0)
	{
		return "12 AM";
	}
	else if (hour === 12)
	{
		return "12 PM";
	}
	else if (hour <= 11)
	{
		return `${hour} AM`;
	}
	else
	{
		return `${hour - 12} PM`;
	}
};

const convertTimeToImperialHour = (date: Date, includeSeconds?: boolean) =>
{
	let postFix = "";
	let hour = date.getHours();
	let minute = date.getMinutes().toString();
	let seconds = date.getSeconds().toString();

	if (hour <= 11)
	{
		postFix = "AM";
	}
	else
	{
		postFix = "PM";
	}

	if (hour === 0)
	{
		hour = 12;
	}
	else if (hour === 12)
	{
		hour = 12;
	}
	else if (hour > 12)
	{
		hour -= 12;
	}

	if (+minute < 10)
	{
		minute = "0" + minute;
	}

	if (+seconds < 10)
	{
		seconds = "0" + seconds;
	}

	if (includeSeconds)
	{
		return `${hour}:${minute}:${seconds} ${postFix}`;
	}
	return `${hour}:${minute} ${postFix}`;
};

const weatherImages = require.context("../asset/images/weather", false);

const getWeatherImage = (weatherCode: number, isNight?: boolean) =>
{
	let weather = weatherCodeMap[0];

	weatherCodeMap.forEach(value =>
	{
		if (value.weatherCode === weatherCode)
		{
			weather = value;
		}
	});

	let svgCode = weather.svg;

	if (weather.hasNight)
	{
		if (isNight)
		{
			svgCode = weather.svg.concat("_night");
		}
		else
		{
			svgCode = weather.svg.concat("_day");
		}
	}

	const image = weatherImages(`./${svgCode}.svg`);

	return { image, condition: weather.condition };
};

const getTemperatureFontColor = (temperature: number) =>
{
	return twMerge(classNames(
		"text-red-400",
		{
			"text-orange-600": temperature <= 80,
			"text-yellow-500": temperature <= 60,
			"text-purple-500": temperature <= 40,
			"text-blue-500": temperature <= 20
		}
	));
};

// Converts all time in UTC to local time
const adjustWeatherDataTime = (weatherData: WeatherData) =>
{
	for (let i = 0; i < weatherData.timelines.daily.length; i++)
	{
		weatherData.timelines.daily[i].time =
			new Date(new Date(weatherData.timelines.daily[i].time).getTime()).toString();
	}

	for (let i = 0; i < weatherData.timelines.hourly.length; i++)
	{
		weatherData.timelines.hourly[i].time =
			new Date(new Date(weatherData.timelines.hourly[i].time).getTime()).toString();
	}
};

// Get matching city names
const cities = require("../asset/US_States_and_Cities.json");

const getMatchingCityNames = (keyword: string) =>
{
	const matchingCities: LocationData[] = [];

	if (keyword.trim().length < 3)
	{
		return [];
	}

	for (const key in cities)
	{
		for (const city of cities[key])
		{
			if ((city as string).toLowerCase().startsWith(keyword.toLowerCase()))
			{
				matchingCities.push({
					city,
					state: key
				});
			}
		}
	}
	return matchingCities;
};

export
{
	convertHourToImperial,
	convertTimeToImperialHour,
	getWeatherImage,
	getTemperatureFontColor,
	adjustWeatherDataTime,
	getMatchingCityNames
};