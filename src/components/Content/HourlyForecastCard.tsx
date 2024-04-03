import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { BsCloudRain } from "react-icons/bs";
import { getTemperatureFontColor } from "../../common/Utils";

interface HourlyForecastCardProps
{
	time: string;
	temperature: number;
	rainProbability: number;
	weatherImage: any;
	className?: string;
}

function HourlyForecastCard({
	time,
	temperature,
	rainProbability,
	weatherImage,
	className
}: HourlyForecastCardProps)
{
	const styles = twMerge(classNames(
		"bg-dark-blue flex justify-between items-center rounded-3xl py-1 px-4 mr-4 text-neutral-100",
		className
	));

	return (
		<div className={ styles }>
			<div className="text-xl screen-sm-2xl:text-sm">
				{ time }
			</div>
			<img className="w-12 screen-sm-2xl:w-8" src={ weatherImage } alt="weather" />
			<div className="flex flex-col items-center">
				<div className={ `text-3xl font-light screen-sm-2xl:text-xl ${getTemperatureFontColor(temperature)}` }>
					{ `${temperature}˚` }
				</div>
				<div className="flex justify-center items-center gap-1 screen-sm-2xl:text-sm">
					<BsCloudRain />
					{ `${rainProbability}%` }
				</div>
			</div>
		</div>
	);
}

export default HourlyForecastCard;