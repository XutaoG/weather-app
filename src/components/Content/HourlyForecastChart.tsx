import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import TitleLabel from "../Reusable/TitleLabel";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useHourlyWeatherDataFromDay } from "../../hooks";
import { convertHourToImperial } from "../../common/Utils";

interface HourlyForecastChartProps
{
	className?: string;
}

function HourlyForecastChart({ className }: HourlyForecastChartProps)
{
	const styles = twMerge(classNames(
		"bg-neutral-100 shadow-lg flex flex-col gap-4",
		className
	));

	const hourlyWeatherDataFromDay = useHourlyWeatherDataFromDay();

	const data: { time: string; temperature: number; }[] = [];

	hourlyWeatherDataFromDay.forEach((weatherData) => 
	{
		data.push({
			time: convertHourToImperial(new Date(weatherData.time).getHours()),
			temperature: Math.round(weatherData.values.temperature)
		});
	});

	return (
		<Panel className={ styles }>
			<TitleLabel message="Hourly Forecast Chart" />
			<div className="grow overflow-x-auto whitespace-nowrap">
				<ResponsiveContainer width={ hourlyWeatherDataFromDay.length * 75 } height="100%">
					<LineChart data={ data }>
						<Line
							type="monotone"
							dataKey="temperature"
							stroke="#377fb3"
							strokeWidth={ 3 } />
						<CartesianGrid stroke="#ccc" />
						<XAxis dataKey="time" />
						<YAxis
							type="number"
							domain={ ["dataMin - 2", "dataMax + 2"] }
							padding={ { bottom: 10 } }
							unit={ "˚" } />
						<Tooltip />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</Panel>
	);
}

export default HourlyForecastChart;