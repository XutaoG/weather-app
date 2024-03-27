import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import DateSelector from "./DateSelector";

interface MenuBarProps
{
	className?: string;
}

function MenuBar({ className }: MenuBarProps)
{
	const styles = twMerge(classNames(
		"flex justify-between items-center py-2 px-8 bg-neutral-400 shadow-b-s",
		className
	));

	return (
		<div className={ styles }>
			<div
				className="w-6 aspect-square flex justify-center items-center 
					rounded-full font-bold shadow-c">
				˚F
			</div>
			<DateSelector />
			<div
				className="px-2 flex justify-center items-center rounded-3xl shadow-c">
				Orlando, FL
			</div>
		</div>
	);
}

export default MenuBar;