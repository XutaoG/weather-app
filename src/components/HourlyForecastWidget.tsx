import classnames from "classnames";
import { BsCloudRainFill, BsCloudSnowFill } from "react-icons/bs";
import { HourlyWeatherData } from "../common/WeatherForecast";

interface HourlyForecastWidgetProps
{
	className?: string;
	data?: HourlyWeatherData;
}

function HourlyForecastWidget({ className, data }: HourlyForecastWidgetProps)
{
	const classes = classnames(
		"bg-gradient-to-br from-neutral-300 to-neutral-500",
		"rounded-3xl",
		"w-48 h-96", // May remove
		"py-3 px-2",
		className,
	);

	return (
		<div className={ classes }>
			<div className="flex justify-center items-center h-1/6">
				<p className="text-3xl text-gray-900">11 AM</p>
			</div>
			<div className="flex flex-col items-center h-2/3 gap-2">
				<h1 className="text-6xl font-semibold text-gray-900 my-4">80°</h1>
				<p className="text-2xl font-bold">Feels like 82°</p>
				<p className="text-2xl font-bold">Partly Cloudy</p>
			</div>
			<div className="flex justify-center items-center h-1/6 gap-2 flex-wrap">
				<div className="flex justify-center items-center gap-1">
					<BsCloudRainFill className="text-xl" />
					<p className="text-xl text-gray-900">100%</p>
				</div>
				<div className="flex justify-center items-center gap-1">
					<BsCloudSnowFill className="text-xl" />
					<p className="text-xl text-gray-900">100%</p>
				</div>
			</div>
		</div>
	);
}

export default HourlyForecastWidget;