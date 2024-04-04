import ContentContainer from "./components/Content/ContentContainer";
import "./index.css";
import WeatherQueryConfig from "./common/WeatherQueryConfig";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setIsFetchingData, setSelectedDayIndex, setWeatherData, useFetchWeatherDataQuery } from "./store";
import { useEffect } from "react";
import Footer from "./Footer";
import MenuBar from "./components/Content/MenuBar";

function App()
{
	const dispatch = useAppDispatch();
	const location = useAppSelector(state => state.userData.location);

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

	return (
		<div className="grow flex flex-col">
			<MenuBar className="self-stretch sticky top-0" />
			<ContentContainer className="grow" />
			<Footer />
		</div>
	);
}

export default App;
