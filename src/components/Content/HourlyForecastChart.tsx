import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";

interface HourlyForecastChartProps
{
	className?: string;
}

function HourlyForecastChart({ className }: HourlyForecastChartProps)
{
	const styles = twMerge(classNames(
		"bg-neutral-100 shadow-lg",
		className
	));

	return (
		<Panel className={ styles }>

		</Panel>
	);
}

export default HourlyForecastChart;