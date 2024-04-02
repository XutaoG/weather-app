import logo from "../../asset/images/logo.svg";

function Logo()
{
	return (
		<div
			className="bg-dark-gray-xl w-fit px-2 py-1 flex gap-2 justify-center items-center rounded-lg 
			shadow-md shadow-black/40">
			<img className="h-14" src={ logo } alt="logo" />
			<div className="text-3xl font-normal text-white">
				<span className="text-blue">Weather</span>Wing
			</div>
		</div>
	);
}

export default Logo;