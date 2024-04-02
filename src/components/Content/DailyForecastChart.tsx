import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "../Reusable/Panel";
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import TitleLabel from "../Reusable/TitleLabel";
import { useDailyWeatherData } from "../../hooks";

interface DailyForecastChartProps
{
	className?: string;
}

function DailyForecastChart({ className }: DailyForecastChartProps)
{
	const styles = twMerge(classNames(
		"flex flex-col gap-4 shadow-md shadow-black/50",
		className
	));

	const hourlyWeatherDataFromDay = useDailyWeatherData();

	const data: { date: string; temperature: number; }[] = [];

	hourlyWeatherDataFromDay.forEach((weatherData) => 
	{
		data.push({
			date: `${new Date(weatherData.time).getMonth() + 1}/${new Date(weatherData.time).getDate()}`,
			temperature: Math.round(weatherData.values.temperatureAvg)
		});
	});

	return (
		<Panel className={ styles }>
			<TitleLabel message="Daily Forecast Chart" />
			<div className="grow overflow-x-auto whitespace-nowrap">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={ data } margin={ { right: 20 } }>
						<Line
							type="monotone"
							dataKey="temperature"
							stroke="#c26932"
							strokeWidth={ 3 } />
						<CartesianGrid stroke="#ffffff" />
						<XAxis dataKey="date" />
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

export default DailyForecastChart;