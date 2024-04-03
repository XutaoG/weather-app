import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

interface PanelProps
{
	children?: ReactNode;
	className?: string;
}

function Panel({ children, className }: PanelProps)
{
	const styles = twMerge(classNames(
		"bg-mid-gray rounded-3xl p-4 border-[1px] border-stone-500/20 shadow-md shadow-black/40",
		"screen-sm-2xl:p-2",
		className
	));

	return (
		<div className={ styles }>
			{ children }
		</div>
	);
}

export default Panel;