import { twMerge } from "tailwind-merge";
import DailyForecastDisplay from "./DailyForecastDisplay";
import LocationDisplay from "./LocationDisplay";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import classNames from "classnames";
import { useAppSelector } from "../../hooks";

interface DashboardProps
{
	className?: string;
}

function Dashboard({ className }: DashboardProps)
{
	const expandDashboard = useAppSelector(state => state.userData.expandDashboard);

	const styles = twMerge(classNames(
		"min-w-96 p-4 bg-dark-gray/90",
		"shadow-md shadow-black/80",
		"screen-sm-2xl:min-w-full",
		{
			"hidden": !expandDashboard
		},
		className
	));

	return (
		<div className={ styles }>
			<div className="flex flex-col py-2 pr-2 items-center gap-8 overflow-y-auto h-full">
				<Logo />
				<SearchBar className="self-stretch" placeholderMessage="Enter a City Name" />
				<LocationDisplay className="self-stretch" />
				<DailyForecastDisplay className="self-stretch" />
			</div>
		</div>
	);
}

export default Dashboard;