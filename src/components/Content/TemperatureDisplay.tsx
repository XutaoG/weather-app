import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import { IoThermometerOutline } from "react-icons/io5";
import { getTemperatureFontColor } from "../../common/Utils";

interface TemperatureDisplayProps
{
	temperature: number;
	temperatureHigh: number;
	temperatureLow: number;
	temperatureApparent: number;
	weatherImage: any;
	weatherCondition: string;
	className?: string;
}

function TemperatureDisplay({
	temperature,
	temperatureHigh,
	temperatureLow,
	temperatureApparent,
	weatherImage,
	weatherCondition,
	className }: TemperatureDisplayProps)
{
	const styles = twMerge(classNames(
		"bg-blue flex flex-col text-neutral-100",
		className
	));

	return (
		<Panel className={ styles }>
			<div className="flex items-center gap-4">
				<img className="w-20" src={ weatherImage } alt="weather" />
				<div className="text-xl font-medium">{ weatherCondition }</div>
			</div>
			<div className="flex gap-4 items-center">
				<div className={ `text-8xl font-extralight ${getTemperatureFontColor(temperature)}` }>
					{ `${temperature}˚` }
				</div>
				<div className="flex flex-col gap-2">
					<div className={ `text-2xl ${getTemperatureFontColor(temperatureHigh)}` }>
						{ `H: ${temperatureHigh}˚` }
					</div>
					<div className={ `text-2xl ${getTemperatureFontColor(temperatureLow)}` }>
						{ `L: ${temperatureLow}˚` }
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<div className="text-lg">Temperature Average</div>
				<div className="flex items-center text-xl">
					<IoThermometerOutline className="text-3xl" />
					<div>
						Feels like <span className={ `font-medium ${getTemperatureFontColor(temperatureApparent)}` }>
							{ temperatureApparent }˚
						</span>
					</div>
				</div>
			</div>
		</Panel>
	);
}

export default TemperatureDisplay;