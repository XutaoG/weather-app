import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import TitleLabel from "../Reusable/TitleLabel";
import { WiDaySunny } from "react-icons/wi";
import { useDailyWeatherData } from "../../hooks";

interface UvIndexDisplayProps
{
	className?: string;
}

function UvIndexDisplay({ className }: UvIndexDisplayProps)
{
	const styles = twMerge(classNames(
		"bg-neutral-100 shadow-lg flex flex-col gap-4",
		className
	));

	const weatherData = useDailyWeatherData();

	const uvIndex = weatherData!.values.uvIndexAvg;

	return (
		<Panel className={ styles }>
			<TitleLabel message="UV Index" />
			<div className="grow flex flex-col justify-between items-start gap-4">
				<div className="text-6xl font-extralight">
					{ uvIndex }
					<span className="text-2xl font-normal">UV</span>
				</div>
				<div className="self-stretch flex justify-between items-center">
					<div className="self-start font-xl">
						{ getUvIndexRating(uvIndex) }
					</div>
					<WiDaySunny className="self-start text-6xl" />
				</div>
			</div>
		</Panel>
	);
}

function getUvIndexRating(uvIndex: number): string
{
	if (uvIndex <= 2)
	{
		return "Low";
	}
	else if (uvIndex <= 5)
	{
		return "Moderate";
	}
	else if (uvIndex <= 7)
	{
		return "High";
	}
	else
	{
		return "Very high";
	}
}

export default UvIndexDisplay;