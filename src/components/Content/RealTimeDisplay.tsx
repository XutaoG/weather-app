import { useEffect, useState } from "react";

function RealTimeDisplay()
{
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() =>
	{
		setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

	}, []);

	return (
		<div className="text-4xl font-light">{ time }</div>
	);
}

export default RealTimeDisplay;