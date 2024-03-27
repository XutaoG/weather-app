import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import TitleLabel from "../Reusable/TitleLabel";
import { WiRain } from "react-icons/wi";
import { useDailyWeatherData } from "../../hooks";

interface PrecipitationAccumulationDisplayProps
{
	className?: string;
}

function PrecipitationAccumulationDisplay({ className }: PrecipitationAccumulationDisplayProps)
{
	const styles = twMerge(classNames(
		"bg-neutral-100 shadow-lg flex flex-col gap-4",
		className
	));

	const weatherData = useDailyWeatherData();

	const precipitation = weatherData!.values.rainAccumulationSum;

	return (
		<Panel className={ styles }>
			<TitleLabel message="Precipitation" />
			<div className="grow flex flex-col justify-between items-start gap-4">
				<div className="text-6xl font-extralight">
					{ `${precipitation}″` }
				</div>
				<div className="self-stretch flex justify-between items-center">
					<div className="self-start font-xl text-wrap">
						{ getPrecipitationAccumulationRating(precipitation) }
					</div>
					<WiRain className="self-start text-6xl" />
				</div>
			</div>
		</Panel>
	);
}

function getPrecipitationAccumulationRating(precipitationAccumulation: number): string
{
	if (precipitationAccumulation === 0)
	{
		return "Zero precipitation";
	}
	if (precipitationAccumulation <= 0.05)
	{
		return "Very light precipitation";
	}
	else if (precipitationAccumulation <= 0.2)
	{
		return "Light precipitation";
	}
	else if (precipitationAccumulation <= 0.8)
	{
		return "Moderate precipitation";
	}
	else if (precipitationAccumulation <= 2)
	{
		return "Heavy precipitation";
	}
	else
	{
		return "Very heavy precipitation";
	}
}

export default PrecipitationAccumulationDisplay;