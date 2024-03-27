import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { BsCloudRain } from "react-icons/bs";

interface DailyForecastCardProps
{
	day: string;
	month: number;
	date: number;
	temperature: number;
	rainProbability: number;
	selected?: boolean;
	className?: string;
}

function DailyForecastCard({ day, month, date, temperature, rainProbability, selected, className }: DailyForecastCardProps)
{
	const styles = twMerge(classNames(
		"bg-transparent flex justify-between items-center rounded-2xl py-5 px-3",
		{
			"cursor-pointer hover:bg-black/20 hover:text-white": !selected,
			"bg-neutral-400": selected
		},
		className
	));

	return (
		<div className={ styles }>
			<div className="">[Icon]</div>
			<div className="text-lg">
				{ `${day}, ${month}/${date}` }
			</div>
			<div className="flex flex-col items-center gap-1">
				<div className="text-3xl">
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