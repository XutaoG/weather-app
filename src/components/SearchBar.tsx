import { BsSearch } from "react-icons/bs";
import Button from "./Button";
import { FormEvent } from "react";

function SearchBar()
{
	const handleSubmit = (event: FormEvent<HTMLFormElement>) =>
	{
		event.preventDefault();
	};

	return (
		<div className="relative">
			<BsSearch className="absolute top-2 left-2 text-xl" />
			<form onSubmit={ handleSubmit }>
				<input
					className="py-1 pl-10 pr-4 text-xl w-full rounded-full"
					placeholder="Search by City or Zip code" />
				<Button className="absolute top-0.5 right-0.5">Search</Button>
			</form>
		</div>
	);
}

export default SearchBar;