import classnames from "classnames";
import { HourlyWeatherData } from "../common/WeatherForecast";
import { BsCloudRainFill, BsCloudSnowFill  } from "react-icons/bs";

interface HourlyForecastMiniWidgetProps
{
	className?: string;
	data?: HourlyWeatherData;
}

function HourlyForecastMiniWidget({ className, data }: HourlyForecastMiniWidgetProps)
{
	const classes = classnames(
		"bg-white",
		"border-8 border-neutral-300 rounded-3xl",
		"w-48 h-48", // May remove
		"py-3 px-2",
		className,
	);

	return (
		<div className={ classes }>
			<div className="flex justify-center items-center h-1/6">
				<p className="text-3xl text-gray-900">11 AM</p>
			</div>
			<div className="flex justify-center items-center h-2/3">
				<h1 className="text-6xl font-semibold text-gray-900">80°</h1>
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

export default HourlyForecastMiniWidget;