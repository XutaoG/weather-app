import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import TitleLabel from "../Reusable/TitleLabel";
import DailyForecastCard from "./DailyForecastCard";
import { useAppSelector } from "../../hooks";

interface DailyForecastProps
{
	className?: string;
}

function DailyForecast({ className }: DailyForecastProps)
{
	const dailyWeatherList = useAppSelector(state => state.weatherData.timelines.daily);

	const styles = twMerge(classNames(
		"bg-neutral-300 flex flex-col gap-4 drop-shadow-xl",
		className
	));

	const renderedDailyForecastCards = dailyWeatherList?.map((weatherData, index) =>
	{
		return <DailyForecastCard
			key={ weatherData.time }
			day={ new Date(weatherData.time).toUTCString().substring(0, 3) }
			month={ new Date(weatherData.time).getMonth() + 1 }
			date={ new Date(weatherData.time).getDate() }
			temperature={ Math.round(weatherData.values.temperatureAvg) }
			rainProbability={ Math.round(weatherData.values.precipitationProbabilityAvg) }
			selected={ index === 0 }
		/>;
	});

	return (
		<Panel className={ styles }>
			<TitleLabel message="Daily Forecast" />
			<div className="flex flex-col">
				{ renderedDailyForecastCards }
			</div>
		</Panel>
	);
}

export default DailyForecast;