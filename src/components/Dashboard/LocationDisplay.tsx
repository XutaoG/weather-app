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
		"flex flex-col p-0",
		className
	));

	const dispatch = useAppDispatch();
	const location = useAppSelector(state => state.userData.location);

	// Fetching image URL
	const { data, isFetching } = useFetchPhotoQuery(`${location.city} ${location.state}`);

	useEffect(() =>
	{
		dispatch(setIsFetchingData(isFetching));
	}, [dispatch, isFetching]);

	let imgSrc = data ? data : "";

	return (
		<Panel className={ styles }>
			<img
				className="w-full h-60 object-cover rounded-t-3xl screen-sm-2xl:h-28"
				src={ imgSrc }
				alt="location" />
			<div className="bg-transparent pl-6 py-3 rounded-b-3xl text-2xl text-blue font-bold">
				{ `${location.city}, ${location.state}` }
			</div>
		</Panel>
	);
}

export default LocationDisplay;