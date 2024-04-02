function Footer()
{
	return (
		<footer
			className="bg-dark-gray-xl text-neutral-100/60 flex justify-center items-center 
			py-4 gap-16 text-sm screen-sm:gap-2 screen-sm:flex-col">
			<div>Made by Xutao Gao with React</div>
			<div>University of Central Florida</div>
			<a
				className="underline"
				href="https://github.com/XutaoG"
				target="_blank"
				rel="noopener noreferrer"
			>My GitHub</a>
			<div>
				Powered by <a
					className="underline"
					href="https://tomorrow.io"
					target="_blank"
					rel="noopener noreferrer"
				>Tomorrow.io</a> & <a
					className="underline"
					href="https://unsplash.com"
					target="_blank"
					rel="noopener noreferrer"
				> Unsplash.com</a>
			</div>
		</footer>
	);
}

export default Footer;