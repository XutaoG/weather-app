import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import TitleLabel from "../Reusable/TitleLabel";
import { BsDroplet } from "react-icons/bs";
import { useDailyWeatherData } from "../../hooks";

interface HumidityDisplayProps
{
	className?: string;
}

function HumidityDisplay({ className }: HumidityDisplayProps)
{
	const styles = twMerge(classNames(
		"bg-neutral-100 shadow-lg flex flex-col gap-4",
		className
	));

	const weatherData = useDailyWeatherData();

	const humidity = Math.round(weatherData!.values.humidityAvg);
	const dewPoint = Math.round(weatherData!.values.dewPointAvg);

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