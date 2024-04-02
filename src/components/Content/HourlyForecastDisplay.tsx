import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import TitleLabel from "../Reusable/TitleLabel";
import HourlyForecastCard from "./HourlyForecastCard";
import { useCurrentDayWeatherData, useHourlyWeatherDataFromDay } from "../../hooks";
import { convertHourToImperial, getWeatherImage } from "../../common/Utils";

interface HourlyForecastDisplayProps
{
	className?: string;
}

function HourlyForecastDisplay({ className }: HourlyForecastDisplayProps)
{
	const styles = twMerge(classNames(
		"flex flex-col gap-4 shadow-md shadow-black/50",
		className
	));

	const hourlyWeatherListInToday = useHourlyWeatherDataFromDay();
	const currentDailyWeatherData = useCurrentDayWeatherData();

	const renderedHourlyForecastCards = hourlyWeatherListInToday.map((weatherData) =>
	{
		const isNight = (new Date(weatherData.time).getTime() <= new Date(currentDailyWeatherData.values.sunriseTime).getTime() ||
			new Date(weatherData.time).getTime() >= new Date(currentDailyWeatherData.values.sunsetTime).getTime());

		return (
			<HourlyForecastCard
				key={ weatherData.time }
				time={ convertHourToImperial(new Date(weatherData.time).getHours()) }
				temperature={ Math.round(weatherData.values.temperature) }
				rainProbability={ Math.round(weatherData.values.precipitationProbability) }
				weatherImage={ getWeatherImage(weatherData.values.weatherCode, isNight).image }
			/>
		);
	});

	return (
		<Panel className={ styles }>
			<TitleLabel message="Hourly Forecast" />
			<div className="grow flex flex-col gap-4 overflow-y-auto whitespace-nowrap">
				{ renderedHourlyForecastCards }
			</div>
		</Panel>
	);
}

export default HourlyForecastDisplay;