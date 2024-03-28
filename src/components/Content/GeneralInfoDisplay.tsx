import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import { BsCloudRain, BsSunriseFill, BsSunsetFill } from "react-icons/bs";
import { IoCalendar, IoLocation } from "react-icons/io5";
import RealTimeDisplay from "./RealTimeDisplay";
import TitleLabel from "../Reusable/TitleLabel";

interface GeneralInfoDisplayProps
{
	date: string;
	location: string;
	sunriseTime: string;
	sunsetTime: string;
	precipitationProbability: number;
	daysInFuture: number;
	className?: string;
}

function GeneralInfoDisplay({
	date,
	location,
	sunriseTime,
	sunsetTime,
	precipitationProbability,
	daysInFuture,
	className
}: GeneralInfoDisplayProps)
{
	const styles = twMerge(classNames(
		"bg-neutral-300 flex gap-4",
		className
	));

	let titleDisplay: string = "";

	if (daysInFuture === 0)
	{
		titleDisplay = "Today";
	}
	else if (daysInFuture === 1)
	{
		titleDisplay = "Tomorrow";
	}
	else
	{
		titleDisplay = `+${daysInFuture} days`;
	}

	return (
		<Panel className={ styles }>
			<div className="min-w-56 flex flex-col justify-start items-start gap-4">
				<TitleLabel message={ titleDisplay } />
				<div className="flex items-center gap-2 text-lg text-blue-500">
					<IoCalendar className="text-4xl " />
					{ date }
				</div>
				{ daysInFuture === 0 ? <RealTimeDisplay /> : null }
				<div className="flex items-center gap-2 text-lg">
					<IoLocation className="text-2xl" />
					{ location }
				</div>
			</div>
			<div className="min-w-56 flex gap-8">
				<div className="h-full w-1 bg-neutral-900 rounded-full" />
				<div className="flex flex-col justify-center gap-2">
					<div className="flex items-center gap-2">
						<BsSunriseFill className="text-2xl text-yellow-500" />
						{ `Sunrise: ${sunriseTime}` }
					</div>
					<div className="flex items-center gap-2">
						<BsSunsetFill className="text-2xl text-yellow-500" />
						{ `Sunset: ${sunsetTime}` }
					</div>
					<div className="flex items-center gap-2">
						<BsCloudRain className="text-2xl" />
						{ `Precipitation: ${precipitationProbability}%` }
					</div>
				</div>
			</div>
		</Panel>
	);
}

export default GeneralInfoDisplay;