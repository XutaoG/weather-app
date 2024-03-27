import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import TitleLabel from "../Reusable/TitleLabel";
import HourlyForecastCard from "./HourlyForecastCard";
import { useAppSelector } from "../../hooks";
import { convertHourToImperial, convertTimeFromUTCtoLocal } from "../../common/Utils";

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

	const hourlyWeatherList = useAppSelector(state => state.weatherData.timelines.hourly);

	const selectedDate = hourlyWeatherList === null ?
		0 : convertTimeFromUTCtoLocal(hourlyWeatherList[0].time).getDate();

	const filteredWeatherList = hourlyWeatherList?.filter((weatherData) =>
	{
		return (convertTimeFromUTCtoLocal(weatherData.time).getDate() === selectedDate);
	});

	const renderedHourlyForecastCards = filteredWeatherList?.map((weatherData) =>
	{
		return (
			<HourlyForecastCard
				key={ weatherData.time }
				time={ convertHourToImperial(convertTimeFromUTCtoLocal(weatherData.time).getHours()) }
				temperature={ Math.round(weatherData.values.temperature) }
				rainProbability={ Math.round(weatherData.values.precipitationProbability) }
			/>
		);
	});

	return (
		<Panel className={ styles }>
			<TitleLabel message="Hourly Forecast" />
			<div className="grow flex gap-4 overflow-x-auto overflow-y-hidden whitespace-nowrap">
				{ renderedHourlyForecastCards }
			</div>
		</Panel>
	);
}

export default HourlyForecastDisplay;