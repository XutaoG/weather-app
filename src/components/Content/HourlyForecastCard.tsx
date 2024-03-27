import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import WeatherImage from "../../asset/images/weather/mostly_clear_day.svg";
import { BsCloudRain } from "react-icons/bs";

interface HourlyForecastCardProps
{
	time: string;
	temperature: number;
	rainProbability: number;
	className?: string;
}

function HourlyForecastCard({ time, temperature, rainProbability, className }: HourlyForecastCardProps)
{
	const styles = twMerge(classNames(
		"bg-transparent flex flex-col justify-between items-center min-w-16 max-w-24",
		className
	));

	return (
		<div className={ styles }>
			<div>
				{ time }
			</div>
			<img className="w-12" src={ WeatherImage } alt="weather" />
			<div className="flex flex-col items-center">
				<div className="text-3xl font-light">
					{ `${temperature}˚` }
				</div>
				<div className="flex justify-center items-center gap-1">
					<BsCloudRain />
					{ `${rainProbability}%` }
				</div>
			</div>
		</div>
	);
}

export default HourlyForecastCard;