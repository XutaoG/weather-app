import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import { convertTimeFromUTCtoLocal } from "./common/Utils";
import { DailyWeatherData } from "./common/WeatherForecast";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useAppDispatch = () => useDispatch<AppDispatch>();

const useDailyWeatherData = (): DailyWeatherData | null =>
{
	const dailyWeatherList = useAppSelector(state => state.weatherData.timelines.daily);

	const selectedDate = dailyWeatherList === null ?
		0 : convertTimeFromUTCtoLocal(dailyWeatherList[0].time).getDate();

	

	let dailyWeatherData: DailyWeatherData | null = null;

	dailyWeatherList?.forEach((weatherData) =>
	{
		if (convertTimeFromUTCtoLocal(weatherData.time).getDate() === selectedDate)
		{
			dailyWeatherData = weatherData;
		}
	});

	return dailyWeatherData;
};


export { useAppDispatch, useAppSelector };
export { useDailyWeatherData };