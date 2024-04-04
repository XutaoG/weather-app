import { twMerge } from "tailwind-merge";
import Dashboard from "../Dashboard/Dashboard";
import Content from "./Content";
import classNames from "classnames";

interface ContentContainerProps
{
	className?: string;
}

function ContentContainer({ className }: ContentContainerProps)
{
	const styles = twMerge(classNames(
		"bg-dark-gray flex z-20 relative",
		className
	));

	return (
		<div className={ styles }>
			<Dashboard className="z-10 absolute top-0 h-full" />
			<Content className="grow" />
		</div>
	);
}

export default ContentContainer;