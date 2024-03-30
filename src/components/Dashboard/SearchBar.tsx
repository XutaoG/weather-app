import classNames from "classnames";
import { IoSearch } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { GrPowerCycle } from "react-icons/gr";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { getMatchingCityNames } from "../../common/Utils";
import Panel from "../Reusable/Panel";
import { setLocation } from "../../store";
import CityData from "../../common/LocationData";
import LocationData from "../../common/LocationData";

interface SearchBarProps
{
	placeholderMessage?: string;
	className?: string;
}

function SearchBar({ placeholderMessage, className }: SearchBarProps)
{
	const styles = twMerge(classNames(
		"flex flex-row justify-between gap-4 relative",
		className
	));

	const divRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const dispatch = useAppDispatch();
	const isFetchingData = useAppSelector(state => state.userData.isFetchingData);

	const [showMatchingCities, setShowMatchingCities] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const matchingCities: LocationData[] = getMatchingCityNames(searchInput);

	useEffect(() =>
	{
		// Handles checking outside click
		const handleOutsideClick = (event: MouseEvent) =>
		{
			if (divRef.current && !divRef.current.contains(event.target as Node))
			{
				setShowMatchingCities(false);
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);
		return () =>
		{
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) =>
	{
		setSearchInput(event.target.value);
	};

	const onCityClick = (cityData: CityData) =>
	{
		setSearchInput("");
		setShowMatchingCities(false);

		// Update global location
		dispatch(setLocation(cityData));
	};

	const renderedMatchingCities = showMatchingCities && matchingCities.length !== 0 ?
		<Panel className="absolute top-10 left-0 z-20 w-full p-2">
			<div
				className="max-h-80 overflow-y-auto">
				{
					matchingCities.map((cityData) =>
					{
						return (
							<div
								key={ `${cityData.city},${cityData.state}` }
								className="px-4 py-2 flex justify-between items-center 
								hover:bg-neutral-300 rounded-2xl cursor-pointer"
								onClick={ () => onCityClick(cityData) }>
								<div className="font-medium">{ cityData.city }</div>
								<div>{ cityData.state }</div>
							</div>
						);
					})
				}
			</div>
		</Panel> : null;

	return (
		<div className={ styles } ref={ divRef }>
			<input
				className="grow h-8 rounded-full pl-10 pr-4 shadow-rb focus:outline-none relative"
				type="text"
				value={ searchInput }
				placeholder={ placeholderMessage }
				ref={ inputRef }
				onChange={ onInputChange }
				onFocus={ () => setShowMatchingCities(true) }
			/>
			<div className="text-2xl absolute left-1.5 top-1">
				{ isFetchingData ? <GrPowerCycle className="animate-spin" /> : <IoSearch /> }
			</div>
			{ renderedMatchingCities }
		</div>
	);
}

export default SearchBar;