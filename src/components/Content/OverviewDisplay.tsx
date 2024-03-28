import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import SearchBar from "../Reusable/SearchBar";
import TitleLabel from "../Reusable/TitleLabel";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useAppSelector, useCurrentHourWeatherData, useCurrentDayWeatherData, useAppDispatch } from "../../hooks";
import { convertTimeToImperialHour, getWeatherImage } from "../../common/Utils";
import WindStatusDisplay from "./WindStatusDisplay";
import TemperatureDisplay from "./TemperatureDisplay";
import GeneralInfoDisplay from "./GeneralInfoDisplay";
import { setSelectedDayIndex } from "../../store";

interface OverviewDisplayProps
{
	className?: string;
}

function OverviewDisplay({ className }: OverviewDisplayProps)
{
	const styles = twMerge(classNames(
		"bg-neutral-100 shadow-lg flex flex-col gap-4",
		className
	));

	const dispatch = useAppDispatch();

	const currentHourWeatherData = useCurrentHourWeatherData();
	const currentDayWeatherData = useCurrentDayWeatherData();
	const selectedDate = new Date(currentDayWeatherData.time);
	const userData = useAppSelector(state => state.userData);

	let titleLabel = "Future Forecast";
	let temperature = Math.round(currentDayWeatherData.values.temperatureAvg);
	let temperatureApparent = Math.round(currentDayWeatherData.values.temperatureApparentAvg);
	let weatherCondition = getWeatherImage(currentDayWeatherData.values.weatherCodeMax);
	let windSpeed = Math.round(currentDayWeatherData.values.windSpeedAvg * 10) / 10;
	let windDirection = Math.round(currentDayWeatherData.values.windDirectionAvg);
	let precipitationProbability = Math.round(currentDayWeatherData.values.precipitationProbabilityAvg);

	if (userData.selectedDayIndex === 0)
	{
		titleLabel = "Today's Weather Overview";
		temperature = Math.round(currentHourWeatherData.values.temperature);
		temperatureApparent = Math.round(currentHourWeatherData.values.temperatureApparent);
		windSpeed = Math.round(currentHourWeatherData.values.windSpeed * 10) / 10;
		windDirection = Math.round(currentHourWeatherData.values.windDirection);
		weatherCondition = getWeatherImage(currentHourWeatherData.values.weatherCode);
		precipitationProbability = Math.round(currentHourWeatherData.values.precipitationProbability);
	}

	const setDayToToday = () =>
	{
		dispatch(setSelectedDayIndex(0));
	}

	return (
		<Panel className={ styles }>
			<SearchBar placeholderMessage="Search for Places..." />
			<div className="flex gap-4">
				<TitleLabel message={ titleLabel } />
				{
					userData.selectedDayIndex === 0 ? null :
						<div className="w-fit px-3 py-1 rounded-xl bg-neutral-400 font-semibold flex 
							items-center gap-2 cursor-pointer hover:bg-neutral-500 hover:text-white"
							onClick={ setDayToToday }>
							View Today
							<RiArrowGoBackLine />
						</div>
				}
			</div>
			<div className="flex gap-4">
				<TemperatureDisplay
					className="grow"
					temperature={ temperature }
					temperatureHigh={ Math.round(currentDayWeatherData.values.temperatureMax) }
					temperatureLow={ Math.round(currentDayWeatherData.values.temperatureMin) }
					temperatureApparent={ temperatureApparent }
					weatherImage={ weatherCondition.image }
					weatherCondition={ weatherCondition.condition } />
				<WindStatusDisplay
					windSpeed={ windSpeed }
					windDirection={ windDirection } />
			</div>
			<GeneralInfoDisplay
				className="grow"
				date={
					`${selectedDate.toDateString().substring(0, 3)},
					${selectedDate.toDateString().substring(4, 7)} 
					${selectedDate.getDate()},
					${selectedDate.getFullYear()}`
				}
				location={ userData.location }
				sunriseTime={ convertTimeToImperialHour(new Date(currentDayWeatherData.values.sunriseTime)) }
				sunsetTime={ convertTimeToImperialHour(new Date(currentDayWeatherData.values.sunsetTime)) }
				precipitationProbability={ precipitationProbability }
				daysInFuture={ userData.selectedDayIndex } />
		</Panel>
	);
}

export default OverviewDisplay;