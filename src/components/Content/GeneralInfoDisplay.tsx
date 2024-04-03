import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import { BsCloudRainFill, BsSunriseFill, BsSunsetFill } from "react-icons/bs";
import { IoCalendar, IoLocation } from "react-icons/io5";
import RealTimeDisplay from "./RealTimeDisplay";
import TitleLabel from "../Reusable/TitleLabel";
import LocationData from "../../common/LocationData";

interface GeneralInfoDisplayProps
{
	date: string;
	location: LocationData;
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
		"bg-light-gray-xl flex flex-col gap-4 text-neutral-100 shadow-none",
		"screen-sm-2xl:gap-2",
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
			<TitleLabel message={ titleDisplay } />
			<div className="grow flex gap-2">
				<div className="flex flex-col justify-start items-start gap-4">
					<div 
						className="flex items-center gap-2 text-lg font-semibold text-dark-blue
						screen-sm-2xl:text-sm">
						<IoCalendar className="text-4xl screen-sm-2xl:text-xl" />
						{ date }
					</div>
					{ daysInFuture === 0 ? <RealTimeDisplay /> : null }
					<div className="flex items-start gap-2 text-lg screen-sm-2xl:text-sm">
						<IoLocation className="text-2xl screen-sm-2xl:text-lg" />
						{ `${location.city}, ${location.state}` }
					</div>
				</div>
				<div className="flex gap-8 text-lg screen-sm-2xl:gap-2">
					<div className="h-full w-1 bg-dark-gray rounded-full" />
					<div className="flex flex-col justify-center gap-2 screen-sm-2xl:text-sm">
						<div className="flex items-center gap-2">
							<BsSunriseFill className="text-2xl text-yellow-500 screen-sm-2xl:text-lg" />
							{ `${sunriseTime}` }
						</div>
						<div className="flex items-center gap-2">
							<BsSunsetFill className="text-2xl text-yellow-500 screen-sm-2xl:text-lg" />
							{ `${sunsetTime}` }
						</div>
						<div className="flex items-center gap-2">
							<BsCloudRainFill className="text-2xl text-sky-300 screen-sm-2xl:text-lg" />
							{ `${precipitationProbability}%` }
						</div>
					</div>
				</div>
			</div>
		</Panel >
	);
}

export default GeneralInfoDisplay;