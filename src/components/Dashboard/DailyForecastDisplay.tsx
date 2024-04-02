import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import TitleLabel from "../Reusable/TitleLabel";
import DailyForecastCard from "./DailyForecastCard";
import { useAppDispatch, useAppSelector, useDailyWeatherData } from "../../hooks";
import { setSelectedDayIndex } from "../../store";
import { getWeatherImage } from "../../common/Utils";

interface DailyForecastDisplayProps
{
	className?: string;
}

function DailyForecastDisplay({ className }: DailyForecastDisplayProps)
{
	const styles = twMerge(classNames(
		"flex flex-col gap-4 shadow-md shadow-black/50",
		className
	));

	const dispatch = useAppDispatch();

	const dailyWeatherList = useDailyWeatherData();
	const selectedDayIndex = useAppSelector(state => state.userData.selectedDayIndex);

	const onCardClick = (index: number) =>
	{
		dispatch(setSelectedDayIndex(index));
	};

	const renderedDailyForecastCards = dailyWeatherList.map((weatherData, index) =>
	{
		return <DailyForecastCard
			key={ weatherData.time }
			day={ new Date(weatherData.time).toUTCString().substring(0, 3) }
			month={ new Date(weatherData.time).getMonth() + 1 }
			date={ new Date(weatherData.time).getDate() }
			temperature={ Math.round(weatherData.values.temperatureAvg) }
			rainProbability={ Math.round(weatherData.values.precipitationProbabilityAvg) }
			weatherImage={ getWeatherImage(weatherData.values.weatherCodeMax).image }
			selected={ index === selectedDayIndex }
			onClick={ () => onCardClick(index) }
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

export default DailyForecastDisplay;