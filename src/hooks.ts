import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "./store";
import { DailyWeatherData } from "./common/WeatherForecast";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useAppDispatch = () => useDispatch<AppDispatch>();

// Returns the current hour weather data
const useCurrentHourWeatherData = () =>
{
	const hourlyWeatherList = useAppSelector(state => state.userData.weatherData!.timelines.hourly);

	const currentHour = new Date().getHours();

	let currentHourWeatherData = hourlyWeatherList[0];

	for (let hourlyData of hourlyWeatherList)
	{
		if (new Date(hourlyData.time).getHours() === currentHour)
		{
			currentHourWeatherData = hourlyData;
			break;
		}
	}

	return currentHourWeatherData;
};

// Returns all hourly weather data in a day
const useHourlyWeatherDataFromDay = () =>
{
	const hourlyWeatherList = useAppSelector(state => state.userData.weatherData!.timelines.hourly);
	const dailyWeatherList = useAppSelector(state => state.userData.weatherData!.timelines.daily);
	let selectedDayIndex = useAppSelector(state => state.userData.selectedDayIndex);

	let numAdded = 0;
	let hasStartedAdding = false;

	const filteredHourlyData = hourlyWeatherList.filter((weatherData) =>
	{
		if (new Date(weatherData.time).getDate() ===
			new Date(dailyWeatherList[selectedDayIndex].time).getDate() || (hasStartedAdding && numAdded <= 12))
		{
			hasStartedAdding = true;
			numAdded++;
			return true;
		}
		return false;
	});

	return filteredHourlyData;
};

// Return the selected daily weather data by selected date
const useCurrentDayWeatherData = (): DailyWeatherData =>
{
	const dailyWeatherList = useAppSelector(state => state.userData.weatherData!.timelines.daily);
	const selectedDayIndex = useAppSelector(state => state.userData.selectedDayIndex);

	let dailyWeatherData: DailyWeatherData = dailyWeatherList[0];

	dailyWeatherList.forEach((weatherData) =>
	{
		if (weatherData.time === dailyWeatherList[selectedDayIndex].time)
		{
			dailyWeatherData = weatherData;
		}
	});

	return dailyWeatherData;
};

// Retruns all daily weather data
const useDailyWeatherData = (): DailyWeatherData[] =>
{
	return useAppSelector(state => state.userData.weatherData!.timelines.daily);
};

export { useAppDispatch, useAppSelector };
export
{
	useCurrentHourWeatherData,
	useHourlyWeatherDataFromDay,
	useCurrentDayWeatherData,
	useDailyWeatherData
};