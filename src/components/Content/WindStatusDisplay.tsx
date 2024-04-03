import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import TitleLabel from "../Reusable/TitleLabel";
import classNames from "classnames";
import { WiWindDeg } from "react-icons/wi";
import { BsWind } from "react-icons/bs";


interface WindStatusDisplayProps
{
	windSpeed: number;
	windDirection: number;
	className?: string;
}

function WindStatusDisplay({ windSpeed, windDirection, className }: WindStatusDisplayProps)
{
	const styles = twMerge(classNames(
		"bg-light-gray-xl min-h-48 min-w-48 flex flex-col gap-4 shadow-none text-neutral-100",
		"screen-sm-2xl:min-w-12",
		className
	));

	return (
		<Panel className={ styles }>
			<TitleLabel message="Wind Status" />
			<div className="grow flex flex-col justify-between">
				<div className="grow flex flex-col gap-2 justify-center items-end">
					<div className="text-6xl font-light screen-sm-2xl:text-2xl">
						{ windSpeed }
						<span className="text-base screen-sm-2xl:text-sm">MPH</span>
					</div>
					<div className="flex justify-end items-center gap-1 screen-sm-2xl:hidden">
						<WiWindDeg className="text-2xl" />
						<div className="text-lg">
							{ `${windDirection}˚ due north` }
						</div>
					</div>
				</div>
				<BsWind className="text-5xl" />
			</div>
		</Panel>
	);
}

export default WindStatusDisplay;