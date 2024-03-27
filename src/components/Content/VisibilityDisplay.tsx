import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import TitleLabel from "../Reusable/TitleLabel";
import { BsEye } from "react-icons/bs";
import { useDailyWeatherData } from "../../hooks";

interface VisibilityDisplayProps
{
	className?: string;
}

function VisibilityDisplay({ className }: VisibilityDisplayProps)
{
	const styles = twMerge(classNames(
		"bg-neutral-100 shadow-lg",
		className
	));

	const weatherData = useDailyWeatherData();

	const visibility = Math.round(weatherData!.values.visibilityAvg * 10) / 10;

	return (
		<Panel className={ styles }>
			<TitleLabel message="Visibility" />
			<div className="grow flex justify-between items-center gap-4">
				<div className="text-6xl font-extralight">
					{ visibility }
					<span className="text-2xl font-normal">mi</span>
				</div>
				<div className="flex flex-col justify-between gap-4">
					<BsEye className="text-6xl self-end" />
					<div className="w-72 text-end">
						{ getVisibilityRating(visibility) }
					</div>
				</div>
			</div>
		</Panel>
	);
}

function getVisibilityRating(visibility: number): string
{
	if (visibility <= 1)
	{
		return "Extremely poor visibility";
	}
	else if (visibility <= 3)
	{
		return "Poor visibility";
	}
	else if (visibility <= 5)
	{
		return "Moderate visibility";
	}
	else if (visibility <= 10)
	{
		return "Good visibility";
	}
	else 
	{
		return "Excellent visibility";
	}
}

export default VisibilityDisplay;