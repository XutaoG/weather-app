import Content from "./Content";
import MenuBar from "./MenuBar";

function ContentContainer()
{
	return (
		<div className="flex-grow bg-neutral-200 flex flex-col z-20 shadow-b">
			<MenuBar className="self-stretch sticky top-0" />
			<Content className="grow self-center" />
		</div>
	);
}

export default ContentContainer;