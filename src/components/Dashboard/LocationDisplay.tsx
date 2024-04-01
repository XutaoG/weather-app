import classNames from "classnames";
import Panel from "../Reusable/Panel";
import { twMerge } from "tailwind-merge";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setIsFetchingData, useFetchPhotoQuery } from "../../store";
import { useEffect } from "react";

interface LocationDisplayProps
{
	className?: string;
}

function LocationDisplay({ className }: LocationDisplayProps)
{
	const styles = twMerge(classNames(
		"flex flex-col bg-transparent p-0",
		className
	));

	const dispatch = useAppDispatch();
	const location = useAppSelector(state => state.userData.location);

	// Fetching image URL
	// const { data, isFetching } = useFetchPhotoQuery(`${location.city} ${location.state}`);

	// useEffect(() =>
	// {
	// 	dispatch(setIsFetchingData(isFetching));
	// }, [dispatch, isFetching]);

	// let imgSrc = data ? data : "";

	return (
		<Panel className={ styles }>
			<img
				className="w-full h-60 object-cover rounded-t-3xl"
				src={ "https://images.unsplash.com/photo-1617409123168-8fb039dd3b39?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
				alt="location" />
			<div className="bg-neutral-400 pl-6 py-3 rounded-b-3xl text-2xl text-white font-bold">
				{ `${location.city}, ${location.state}` }
			</div>
		</Panel>
	);
}

export default LocationDisplay;