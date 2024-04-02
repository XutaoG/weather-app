import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { BsCloudRain } from "react-icons/bs";
import { ComponentPropsWithoutRef } from "react";
import { getTemperatureFontColor } from "../../common/Utils";

interface DailyForecastCardProps extends ComponentPropsWithoutRef<"div">
{
	day: string;
	month: number;
	date: number;
	temperature: number;
	rainProbability: number;
	weatherImage: any;
	selected?: boolean;
	className?: string;
}

function DailyForecastCard({
	day,
	month,
	date,
	temperature,
	selected,
	rainProbability,
	weatherImage,
	className,
	...rest
}: DailyForecastCardProps)
{
	const styles = twMerge(classNames(
		"bg-transparent flex justify-between items-center rounded-2xl py-5 px-3 text-neutral-100",
		{
			"text-neutral-300 cursor-pointer hover:bg-black/10 hover:text-neutral-100": !selected,
			"bg-black/30": selected
		},
		className
	));

	return (
		<div className={ styles } { ...rest }>
			<img className="w-12" src={ weatherImage } alt="weather" />
			<div className="text-lg">
				{ `${day}, ${month}/${date}` }
			</div>
			<div className="flex flex-col items-center gap-1">
				<div className={ `text-3xl ${getTemperatureFontColor(temperature)}` }>
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

export default DailyForecastCard;