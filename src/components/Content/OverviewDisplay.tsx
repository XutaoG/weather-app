import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import SearchBar from "../Reusable/SearchBar";
import TitleLabel from "../Reusable/TitleLabel";
import { IoThermometerOutline, IoCalendar, IoLocation } from "react-icons/io5";
import { WiWindDeg } from "react-icons/wi";
import { BsSunrise, BsSunset, BsCloudRain, BsCloudSnow, BsWind } from "react-icons/bs";
import WeatherImage from "../../asset/images/weather/mostly_clear_day.svg";

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

	return (
		<Panel className={ styles }>
			<SearchBar placeholderMessage="Search for Places..." />
			<TitleLabel message="Daily Overview" />
			<div className="flex gap-4">
				<Panel className="grow bg-neutral-400 flex flex-col">
					<div className="flex items-center gap-4">
						<img className="w-20" src={ WeatherImage } alt="weather" />
						<div className="text-xl">Mostly Clear</div>
					</div>
					<div className="flex gap-4 items-center">
						<div className="text-8xl font-extralight">82˚</div>
						<div className="flex flex-col gap-2">
							<div className="text-xl">H: 85˚</div>
							<div className="text-xl">L: 67˚</div>
						</div>
					</div>
					<div className="flex items-center text-xl">
						<IoThermometerOutline className="text-3xl" />Feels like 84˚
					</div>
				</Panel>
				<Panel className="bg-neutral-300 min-h-48 min-w-48 flex flex-col gap-4">
					<TitleLabel message="Wind Status" />
					<div className="grow flex flex-col justify-between">
						<div className="self-end flex flex-col gap-2">
							<div className="text-5xl">
								4.2<span className="text-base">MPH</span>
							</div>
							<div className="flex justify-end items-center gap-1">
								<WiWindDeg className="text-3xl" />
								<div className="text-xl">126˚</div>
							</div>
						</div>
						<BsWind className="text-5xl" />
					</div>
				</Panel>
			</div>
			<Panel className="grow bg-neutral-300 flex gap-12">
				<div className="flex flex-col justify-center gap-2">
					<div className="text-5xl font-light">10:45 AM</div>
					<div className="flex items-center gap-2 text-lg">
						<IoCalendar className="text-2xl" />Mon, Mar 12, 2024
					</div>
					<div className="flex items-center gap-2 text-lg">
						<IoLocation className="text-2xl" />Orlando, FL
					</div>
				</div>
				<div className="flex gap-8">
					<div className="h-full w-1 bg-neutral-900 rounded-full" />
					<div className="flex flex-col justify-center gap-2">
						<div className="flex items-center gap-2">
							<BsSunrise className="text-2xl" /> Sunrise: 7:45 AM
						</div>
						<div className="flex items-center gap-2">
							<BsSunset className="text-2xl" /> Sunset: 6:12 PM
						</div>
						<div className="flex items-center gap-2">
							<BsCloudRain className="text-2xl" /> Rain: 30%
						</div>
						<div className="flex items-center gap-2">
							<BsCloudSnow className="text-2xl" />Snow: 10%
						</div>
					</div>
				</div>
			</Panel>
		</Panel>
	);
}

export default OverviewDisplay;