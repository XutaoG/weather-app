import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import TitleLabel from "../Reusable/TitleLabel";
import HourlyForecastCard from "./HourlyForecastCard";
import { useCurrentDayWeatherData, useHourlyWeatherDataFromDay } from "../../hooks";
import { convertHourToImperial, getWeatherImage } from "../../common/Utils";
import { Fragment } from "react/jsx-runtime";

interface HourlyForecastDisplayProps
{
	className?: string;
}

function HourlyForecastDisplay({ className }: HourlyForecastDisplayProps)
{
	const styles = twMerge(classNames(
		"bg-neutral-100 shadow-lg flex flex-col gap-4",
		className
	));

	const hourlyWeatherListInToday = useHourlyWeatherDataFromDay();
	const currentDailyWeatherData = useCurrentDayWeatherData();

	const renderedHourlyForecastCards = hourlyWeatherListInToday.map((weatherData) =>
	{
		const isNight = (new Date(weatherData.time).getTime() <= new Date(currentDailyWeatherData.values.sunriseTime).getTime() ||
			new Date(weatherData.time).getTime() >= new Date(currentDailyWeatherData.values.sunsetTime).getTime());

		return (
			<div key={ weatherData.time } className="flex flex-col">
				<HourlyForecastCard
					time={ convertHourToImperial(new Date(weatherData.time).getHours()) }
					temperature={ Math.round(weatherData.values.temperature) }
					rainProbability={ Math.round(weatherData.values.precipitationProbability) }
					weatherImage={ getWeatherImage(weatherData.values.weatherCode, isNight).image }
				/>
				<div className="self-center bg-black/10 w-[90%] h-[1px]" />
			</div>
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