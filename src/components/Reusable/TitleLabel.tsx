import classNames from "classnames";
import { twMerge } from "tailwind-merge";

interface TitleLabelProps
{
	message: string;
	className?: string;
}

function TitleLabel({ message, className }: TitleLabelProps)
{
	const styles = twMerge(classNames(
		"w-fit px-3 py-1 rounded-3xl bg-neutral-500 text-white",
		className
	));

	return (
		<div className={ styles }>
			{ message }
		</div>
	);
}

export default TitleLabel;