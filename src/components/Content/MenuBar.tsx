import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { IoCalendar } from "react-icons/io5";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector, useDailyWeatherData, useCurrentDayWeatherData } from "../../hooks";
import { setSelectedDayIndex } from "../../store";

interface MenuBarProps
{
	className?: string;
}

function MenuBar({ className }: MenuBarProps)
{
	const dispatch = useAppDispatch();

	const selectedDayIndex = useAppSelector(state => state.userData.selectedDayIndex);
	const location = useAppSelector(state => state.userData.location);

	const weatherDataDayLength = useDailyWeatherData().length;
	const selectedDate = new Date(useCurrentDayWeatherData().time);

	const selectPreviousDay = () =>
	{
		dispatch(setSelectedDayIndex(selectedDayIndex - 1));
	};

	const selectNextDay = () =>
	{
		dispatch(setSelectedDayIndex(selectedDayIndex + 1));
	};

	const previousButtonStyle = twMerge(classNames(
		"h-6 aspect-square rounded-l-full flex justify-center items-center",
		{
			"hover:bg-black/15 hover:text-white": selectedDayIndex !== 0,
			"cursor-not-allowed": selectedDayIndex === 0
		}
	));

	const nextButtonStyle = twMerge(classNames(
		"h-6 aspect-square rounded-r-full flex justify-center items-center",
		{
			"hover:bg-black/15 hover:text-white": selectedDayIndex !== weatherDataDayLength - 1,
			"cursor-not-allowed": selectedDayIndex === weatherDataDayLength - 1
		}
	));

	const styles = twMerge(classNames(
		"flex justify-between items-center py-2 px-8 bg-dark-gray-xl shadow-md shadow-black/80",
		"screen-sm-xl:flex-col screen-sm-xl:gap-2",
		className
	));

	return (
		<div className={ styles }>
			<div
				className="bg-blue w-6 aspect-square flex justify-center items-center 
					rounded-full font-semibold shadow-c text-neutral-100">
				˚F
			</div>
			<div
				className="bg-blue min-w-fit w-56 flex justify-between items-center gap-4 
				rounded-full shadow-c text-neutral-100">
				<button
					className={ previousButtonStyle }
					disabled={ selectedDayIndex === 0 }
					onClick={ selectPreviousDay }
				>
					<BsCaretLeftFill />
				</button>
				<div className="flex justify-center items-center gap-1">
					<IoCalendar className="text-lg" />
					{
						`${selectedDate.toDateString().substring(4, 7)} 
						${selectedDate.getDate()},
						${selectedDate.getFullYear()}`
					}
				</div>
				<button
					className={ nextButtonStyle }
					disabled={ selectedDayIndex === weatherDataDayLength - 1 }
					onClick={ selectNextDay }
				>
					<BsCaretRightFill />
				</button>
			</div>
			<div
				className="bg-blue px-2 flex justify-center items-center rounded-3xl shadow-c text-neutral-100">
				{ `${location.city}, ${location.state}` }
			</div>
		</div>
	);
}

export default MenuBar;