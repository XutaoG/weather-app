import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { IoCalendar } from "react-icons/io5";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

interface DateSelectorProps
{
	className?: string;
}

function DateSelector({ className }: DateSelectorProps)
{
	const styles = twMerge(classNames(
		"flex justify-between items-center gap-4 rounded-full shadow-c",
		className
	));

	return (
		<div className={ styles }>
			<button className="h-6 aspect-square rounded-l-full flex justify-center items-center
				 hover:bg-black/40 hover:text-white">
				<BsCaretLeftFill />
			</button>
			<div className="flex justify-center items-center gap-1">
				<IoCalendar className="text-lg"/> Mar 12, 2024
			</div>
			<button className="h-6 aspect-square rounded-r-full flex justify-center items-center
				 hover:bg-black/40 hover:text-white">
				<BsCaretRightFill />
			</button>
		</div>
	);
}

export default DateSelector;