import classnames from "classnames";
import { ReactNode } from "react";
import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button">
{
	className?: string;
	children: ReactNode;
}

function Button({ className, children, ...rest }: ButtonProps)
{
	const classes = twMerge(classnames(
		"flex justify-center items-center gap-1",
		"px-3 py-1 rounded-full",
		"bg-gradient-to-r from-neutral-300 to-neutral-400",
		"hover:bg-neutral-400",
		className
	));

	return (
		<button className={ classes } { ...rest }>
			{ children }
		</button>
	);
}

export default Button;