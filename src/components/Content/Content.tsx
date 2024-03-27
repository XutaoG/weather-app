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
		"px-8 py-6 max-w-[120rem] content-grid gap-x-6 gap-y-5",
		className
	));

	return (
		<div className={ styles }>
			<OverviewDisplay className="daily-display" />
			<HumidityDisplay className="humidity-display min-h-48 min-w-96" />
			<PrecipitationAccumulationDisplay className="precipitation min-h-48 min-w-64 max-w-60" />
			<UvIndexDisplay className="uv-index-display min-h-48 min-w-64 max-w-60" />
			<VisibilityDisplay className="visibility-display min-h-48 min-96" />
			<HourlyForecastDisplay className="hourly-forecast-display h-64 min-w-80 max-w-[30rem]" />
			<HourlyForecastChart className="hourly-forecast-chart h-64" />
			<DailyForecastChart className="daily-forecast-chart h-80" />
		</div>
	);
}

export default Content;