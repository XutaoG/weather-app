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
		"bg-neutral-100 rounded-3xl p-4",
		className
	));

	return (
		<div className={ styles }>
			{ children }
		</div>
	);
}

export default Panel;