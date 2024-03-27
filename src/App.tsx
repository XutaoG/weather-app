import { Fragment } from "react/jsx-runtime";
import ContentContainer from "./components/Content/ContentContainer";
import Dashboard from "./components/Dashboard/Dashboard";
import "./index.css";

function App()
{
	return (
		<Fragment>
			<main className="flex-grow flex">
				<Dashboard />
				<ContentContainer />
			</main>
			<footer className="h-32 bg-neutral-400">

			</footer>
		</Fragment>
	);
}

export default App;
