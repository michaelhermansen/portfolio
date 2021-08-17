const shortString = (string: string, length: number) => {
	if (string.length <= length) return string;
	const short = string.substring(0, length) + ".";
	return short;
};

export default shortString;
