import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import TitleLabel from "../Reusable/TitleLabel";
import { WiDaySunny } from "react-icons/wi";
import { useAppSelector, useCurrentDayWeatherData, useCurrentHourWeatherData } from "../../hooks";
import { Fragment } from "react/jsx-runtime";

interface UvIndexDisplayProps
{
	className?: string;
}

function UvIndexDisplay({ className }: UvIndexDisplayProps)
{
	const styles = twMerge(classNames(
		"flex flex-col gap-4 text-neutral-100",
		className
	));

	const currentHourWeatherData = useCurrentHourWeatherData();
	const currentDayWeatherData = useCurrentDayWeatherData();
	const userData = useAppSelector(state => state.userData);

	let uvIndex = currentDayWeatherData.values.uvIndexAvg;

	if (userData.selectedDayIndex === 0)
	{
		uvIndex = currentHourWeatherData.values.uvIndex;
	}

	const dataNotAvailable = uvIndex === undefined;

	return (
		<Panel className={ styles }>
			<TitleLabel message="UV Index" />
			<div className="grow flex flex-col justify-between items-start gap-4 screen-sm-2xl:gap-2">
				<div className="text-6xl font-extralight screen-sm-2xl:text-3xl">
					{ dataNotAvailable ?
						"N/A"
						:
						<Fragment>
							{ uvIndex }
							< span className="text-2xl font-normal screen-sm-2xl:text-sm">UV</span>
						</Fragment>
					}
				</div>
				<div className="self-stretch flex justify-between items-center">
					<div className="self-start screen-sm-2xl:hidden">
						{ dataNotAvailable ? null : getUvIndexRating(uvIndex) }
					</div>
					<WiDaySunny className="self-start text-6xl screen-sm-2xl:text-3xl" />
				</div>
			</div>
		</Panel >
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