import classNames from "classnames";
import { IoSearch, IoLocate } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

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

	return (
		<div className={ styles }>
			<input
				className="grow h-8 rounded-full px-8 shadow-rb focus:outline-none"
				type="text"
				placeholder={ placeholderMessage } />
			<IoSearch className="text-2xl absolute left-1.5 top-1" />
			<button
				className="w-8 aspect-square rounded-full shadow-rb hover:bg-black/20
				flex justify-center items-center text-2xl hover:text-2xl hover:rotate-45">
				<IoLocate />
			</button>
		</div>
	);
}

export default SearchBar;