import classnames from "classnames";
import { twMerge } from 'tailwind-merge';
import { ReactNode } from "react";

interface PanelProps
{
	className?: string;
	children?: ReactNode;
}

function Panel({ className, children }: PanelProps)
{
	const classes = classnames(
		"bg-neutral-300",
		"rounded-xl",
		"border-0",
		"p-4",
		className
	);

	return (
		<div className={ classes }>
			{ children }
		</div>
	);
}

export default Panel;