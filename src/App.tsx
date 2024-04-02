import { Fragment } from "react/jsx-runtime";
import ContentContainer from "./components/Content/ContentContainer";
import Dashboard from "./components/Dashboard/Dashboard";
import "./index.css";
import WeatherQueryConfig from "./common/WeatherQueryConfig";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setIsFetchingData, setWeatherData, useFetchWeatherDataQuery } from "./store";
import { useEffect } from "react";
import { adjustWeatherDataTime } from "./common/Utils";
import WeatherData from "./common/WeatherForecast";

function App()
{
	const dispatch = useAppDispatch();
	// const location = useAppSelector(state => state.userData.location);

	// console.log("Rerendering App...");

	// const weatherQueryConfig: WeatherQueryConfig = {
	// 	location: `${location.city} ${location.state}`,
	// 	timesteps: ["1d", "1h"],
	// 	units: "imperial"
	// };

	// const { data, isFetching, error } = useFetchWeatherDataQuery(weatherQueryConfig);

	// useEffect(() =>
	// {
	// 	if (isFetching)
	// 	{
	// 		dispatch(setIsFetchingData(true));
	// 	}
	// 	else if (error)
	// 	{

	// 	}
	// 	else if (data)
	// 	{
	// 		dispatch(setIsFetchingData(false));
	// 		dispatch(setWeatherData(data));
	// 	}

	// }, [dispatch, location, data, error, isFetching]);

	const initialWeatherData: WeatherData = require("./asset/temp-weather-data.json");

	useEffect(() =>
	{
		dispatch(setWeatherData(initialWeatherData));
	}, [dispatch, initialWeatherData]);

	return (
		<Fragment>
			<main className="flex-grow flex">
				<Dashboard />
				<ContentContainer />
			</main>
			<footer className="h-32 bg-dark-gray-xl">
			</footer>
		</Fragment>
	);
}

export default App;
