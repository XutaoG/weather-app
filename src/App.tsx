import WeatherQueryConfig from "./common/WeatherQueryConfig";
import { useFetchWeatherDailyQuery } from "./store";

function App()
{
	const queryConfig: WeatherQueryConfig = {
		location: "32117 US",
		timesteps: ["1d"],
		units: "imperial"
	};

	const { data } = useFetchWeatherDailyQuery(queryConfig);

	console.log(`Average temperature of next ${data?.timelines.daily?.length} days`);
	console.log(data?.timelines.daily![0].values.temperatureAvg);
	console.log(data?.timelines.daily![1].values.temperatureAvg);
	console.log(data?.timelines.daily![2].values.temperatureAvg);
	console.log(data?.timelines.daily![3].values.temperatureAvg);
	console.log(data?.timelines.daily![4].values.temperatureAvg);
	console.log(data?.timelines.daily![5].values.temperatureAvg);

	return (
		<div className="App">
			App
		</div>
	);
}

export default App;
