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
		"px-8 py-6 max-w-[120rem] content-grid gap-x-4 gap-y-4",
		className
	));

	return (
		// Total Width: 66 rem, Gap: 1 rem
		<div className={ styles }>
			<OverviewDisplay className="daily-display min-w-[35rem] max-w-[35rem]" />
			<HumidityDisplay className="humidity-display min-h-48 min-w-[30rem] max-w-[30rem]" />
			<PrecipitationAccumulationDisplay className="precipitation min-w-[14.5rem] max-w-[14.5rem]" />
			<UvIndexDisplay className="uv-index-display min-h-48 min-w-[14.5rem] max-w-[14.5rem]" />
			<VisibilityDisplay className="visibility-display min-h-48 min-w-[30rem] max-w-[30rem]" />
			<HourlyForecastDisplay className="hourly-forecast-display max-h-[41rem] min-w-[24rem] max-w-[24rem]" />
			<HourlyForecastChart className="hourly-forecast-chart h-80 min-w-[41rem] max-w-[41rem]" />
			<DailyForecastChart className="daily-forecast-chart h-80 min-w-[41rem] max-w-[41rem]" />
		</div>
	);
}

export default Content;