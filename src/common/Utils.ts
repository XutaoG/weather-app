const convertTimeFromUTCtoLocal = (date: Date | string) =>
{
	if (date instanceof Date)
	{
		return new Date(date.getTime());
	}
	else
	{
		return new Date(new Date(date).getTime());
	}
};

const convertHourToImperial = (hour: number) =>
{
	if (hour === 0)
	{
		return "12 AM";
	}
	else if (hour === 12)
	{
		return "12 PM";
	}
	else if (hour <= 11)
	{
		return `${hour} AM`;
	}
	else
	{
		return `${hour - 12} PM`;
	}
};

export
{
	convertTimeFromUTCtoLocal,
	convertHourToImperial
};