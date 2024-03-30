import classNames from "classnames";
import Panel from "../Reusable/Panel";
import { twMerge } from "tailwind-merge";
import { useAppSelector } from "../../hooks";

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

	const location = useAppSelector(state => state.userData.location);

	return (
		<Panel className={ styles }>
			<img
				className="w-full h-60 object-cover rounded-t-3xl"
				src="https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JsYW5kb3xlbnwwfHwwfHx8MA%3D%3D"
				alt="location" />
			<div className="bg-neutral-400 pl-6 py-3 rounded-b-3xl text-2xl text-white font-bold">
				{ `${location.city}, ${location.state}` }
			</div>
		</Panel>
	);
}

export default LocationDisplay;