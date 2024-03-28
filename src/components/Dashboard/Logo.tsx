import logo from "../../asset/images/logo.svg";

function Logo()
{
	return (
		<div
			className="w-fit px-2 py-1 flex gap-2 justify-center items-center rounded-lg shadow-lg">
			<img className="h-14" src={ logo } alt="logo" />
			<div className="text-3xl font-normal">
				<span className="text-cyan-400">Weather</span>Wing
			</div>
		</div>
	);
}

export default Logo;