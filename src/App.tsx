import { Fragment } from "react/jsx-runtime";
import ContentContainer from "./components/Content/ContentContainer";
import Dashboard from "./components/Dashboard/Dashboard";
import "./index.css";
import WeatherQueryConfig from "./common/WeatherQueryConfig";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setIsFetchingData, setSelectedDayIndex, setWeatherData, useFetchWeatherDataQuery } from "./store";
import { useEffect } from "react";
import Footer from "./Footer";

function App()
{
	const dispatch = useAppDispatch();
	const location = useAppSelector(state => state.userData.location);

	console.log("Rerendering App...");

	const weatherQueryConfig: WeatherQueryConfig = {
		location: `${location.city} ${location.state}`,
		timesteps: ["1d", "1h"],
		units: "imperial"
	};

	const { data, isFetching, error } = useFetchWeatherDataQuery(weatherQueryConfig);

	useEffect(() =>
	{
		if (isFetching)
		{
			dispatch(setIsFetchingData(true));
		}
		else if (error)
		{

		}
		else if (data)
		{
			dispatch(setIsFetchingData(false));
			dispatch(setWeatherData(data));
			dispatch(setSelectedDayIndex(0));
		}

	}, [dispatch, location, data, error, isFetching]);

	// const initialWeatherData: WeatherData = require("./asset/temp-weather-data.json");

	// useEffect(() =>
	// {
	// 	dispatch(setWeatherData(initialWeatherData));
	// }, [dispatch, initialWeatherData]);

	return (
		<Fragment>
			<main className="flex screen-sm-xl:flex-col">
				<Dashboard />
				<ContentContainer />
			</main>
			<Footer />
		</Fragment>
	);
}

export default App;
