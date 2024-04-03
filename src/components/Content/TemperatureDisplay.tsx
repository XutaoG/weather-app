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
		"bg-blue flex flex-col text-neutral-100 shadow-none",
		className
	));

	return (
		<Panel className={ styles }>
			<div className="flex items-center gap-4">
				<img className="w-20 screen-sm-2xl:w-8" src={ weatherImage } alt="weather" />
				<div className="text-xl font-medium screen-sm-2xl:text-sm">{ weatherCondition }</div>
			</div>
			<div className="flex gap-4 items-center screen-md:flex-col">
				<div className={ `text-8xl font-extralight screen-md:text-6xl ${getTemperatureFontColor(temperature)}` }>
					{ `${temperature}˚` }
				</div>
				<div className="flex flex-col gap-2 text-2xl screen-md:flex-row screen-md:text-lg">
					<div className={ getTemperatureFontColor(temperatureHigh) }>
						{ `H: ${temperatureHigh}˚` }
					</div>
					<div className={ getTemperatureFontColor(temperatureLow) }>
						{ `L: ${temperatureLow}˚` }
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<div className="text-lg screen-sm-2xl:text-sm">Temperature Average</div>
				<div className="flex items-center text-xl screen-sm-2xl:text-sm">
					<IoThermometerOutline className={ `text-3xl screen-sm-2xl:text-xl ${getTemperatureFontColor(temperatureApparent)}` } />
					<div className="">
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