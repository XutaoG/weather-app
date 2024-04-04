import { useEffect, useState } from "react";

function RealTimeDisplay()
{
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() =>
	{
		setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

	}, []);

	return (
		<div className="text-6xl font-light screen-sm-2xl:text-2xl">{ time }</div>
	);
}

export default RealTimeDisplay;