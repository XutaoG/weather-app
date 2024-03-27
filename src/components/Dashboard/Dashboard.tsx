import DailyForecast from "./DailyForecast";
import LocationDisplay from "./LocationDisplay";
import Logo from "./Logo";
import SearchBar from "../Reusable/SearchBar";


function Dashboard()
{
	return (
		<div className="min-w-96 p-6 bg-white flex flex-col gap-8 shadow-rb z-30">
			<Logo />
			<SearchBar className="self-stretch" placeholderMessage="Search for Places..." />
			<LocationDisplay className="self-stretch" />
			<DailyForecast className="self-stretch" />
		</div>
	);
}

export default Dashboard;