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
		"w-fit px-4 py-1 rounded-3xl bg-blue text-neutral-100 text-lg font-semibold",
		"screen-sm-2xl:text-sm screen-sm-2xl:px-2",
		className
	));

	return (
		<div className={ styles }>
			{ message }
		</div>
	);
}

export default TitleLabel;