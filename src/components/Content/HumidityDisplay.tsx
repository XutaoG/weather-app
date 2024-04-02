import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import TitleLabel from "../Reusable/TitleLabel";
import { BsDroplet } from "react-icons/bs";
import { useAppSelector, useCurrentDayWeatherData, useCurrentHourWeatherData } from "../../hooks";

interface HumidityDisplayProps
{
	className?: string;
}

function HumidityDisplay({ className }: HumidityDisplayProps)
{
	const styles = twMerge(classNames(
		"flex flex-col gap-4 text-neutral-100",
		className
	));

	const currentHourWeatherData = useCurrentHourWeatherData();
	const currentDayWeatherData = useCurrentDayWeatherData();
	const userData = useAppSelector(state => state.userData);

	let humidity = Math.round(currentDayWeatherData.values.humidityAvg);
	let dewPoint = Math.round(currentDayWeatherData.values.dewPointAvg);

	if (userData.selectedDayIndex === 0)
	{
		humidity = Math.round(currentHourWeatherData.values.humidity);
		dewPoint = Math.round(currentHourWeatherData.values.dewPoint);
	}

	return (
		<Panel className={ styles }>
			<TitleLabel message="Humidity" />
			<div className="grow flex justify-between items-center gap-4">
				<div className="text-6xl font-extralight">
					{ humidity }
					<span className="text-2xl font-normal">%</span>
				</div>
				<div className="flex flex-col justify-between gap-4">
					<BsDroplet className="text-6xl self-end" />
					<div className="w-72 text-end">
						{ `The dew point is ${dewPoint}˚ right now` }
					</div>
				</div>
			</div>
		</Panel>
	);
}

export default HumidityDisplay;