import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import TitleLabel from "../Reusable/TitleLabel";
import { WiRain } from "react-icons/wi";
import { useAppSelector, useCurrentDayWeatherData, useCurrentHourWeatherData } from "../../hooks";

interface PrecipitationAccumulationDisplayProps
{
	className?: string;
}

function PrecipitationAccumulationDisplay({ className }: PrecipitationAccumulationDisplayProps)
{
	const styles = twMerge(classNames(
		"flex flex-col gap-4 text-neutral-100",
		className
	));

	const currentHourWeatherData = useCurrentHourWeatherData();
	const currentDayWeatherData = useCurrentDayWeatherData();
	const userData = useAppSelector(state => state.userData);

	let precipitation =  currentDayWeatherData.values.rainAccumulationSum;

	if (userData.selectedDayIndex === 0)
	{
		precipitation = currentHourWeatherData.values.rainAccumulation;
	}

	return (
		<Panel className={ styles }>
			<TitleLabel message="Precipitation" />
			<div className="grow flex flex-col justify-between items-start gap-4 screen-sm-2xl:gap-2">
				<div className="text-6xl font-extralight screen-sm-2xl:text-3xl">
					{ `${precipitation}″` }
				</div>
				<div className="self-stretch flex justify-between items-center">
					<div className="self-start screen-sm-2xl:hidden">
						{ getPrecipitationAccumulationRating(precipitation) }
					</div>
					<WiRain className="self-start text-6xl screen-sm-2xl:text-3xl" />
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