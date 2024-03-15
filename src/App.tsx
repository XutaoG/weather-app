import { MdRemoveRedEye, MdOutlineStarBorder } from "react-icons/md";
import Panel from "./components/Panel";
import Button from "./components/Button";
import HourlyForecastMiniWidget from "./components/HourlyForecastMiniWidget";
import "./index.css";
import SearchBar from "./components/SearchBar";
import HourlyForecastWidget from "./components/HourlyForecastWidget";

function App()
{
	return (
		<div className="App">
			Components:
			<Panel>
				Panel
			</Panel>
			<Button>
				Button
			</Button>
			<Button>
				<MdRemoveRedEye />
				Button
			</Button>
			<Button className="gap-2">
				<MdRemoveRedEye className="text-2xl" />
				<p className="text-xl">Button</p>
			</Button>
			<Button className="rounded-full p-1" onClick={ () => console.log("Bookmarked") }>
				<MdOutlineStarBorder className="text-2xl" />
			</Button>
			<HourlyForecastMiniWidget />
			<Panel>
				<SearchBar />
			</Panel>
			<HourlyForecastWidget />
		</div>
	);
}

export default App;
