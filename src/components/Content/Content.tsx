import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import OverviewDisplay from "./OverviewDisplay";
import HumidityDisplay from "./HumidityDisplay";
import UvIndexDisplay from "./UvIndexDisplay";
import VisibilityDisplay from "./VisibilityDisplay";
import HourlyForecastChart from "./HourlyForecastChart";
import HourlyForecastDisplay from "./HourlyForecastDisplay";
import DailyForecastChart from "./DailyForecastChart";
import PrecipitationAccumulationDisplay from "./PrecipitationAccumulationDisplay";

interface ContentProps
{
	className?: string;
}

function Content({ className }: ContentProps)
{
	const styles = twMerge(classNames(
		"px-8 py-6 h-min content-grid gap-x-4 gap-y-4",
		className
	));

	return (
		<div className={ styles }>
			<OverviewDisplay className="daily-display" />
			<HumidityDisplay className="humidity-display" />
			<PrecipitationAccumulationDisplay className="precipitation" />
			<UvIndexDisplay className="uv-index-display" />
			<VisibilityDisplay className="visibility-display" />
			<HourlyForecastDisplay className="hourly-forecast-display" />
			<HourlyForecastChart className="hourly-forecast-chart" />
			<DailyForecastChart className="daily-forecast-chart" />
		</div>
	);
}

export default Content;