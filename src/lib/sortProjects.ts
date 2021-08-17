import { IProjectFields } from "types/contentful";

const sortProjects = (projects: IProjectFields[]) => {
	const months = [
		"Januar",
		"Februar",
		"Mars",
		"April",
		"Mai",
		"Juni",
		"Juli",
		"August",
		"September",
		"Oktober",
		"November",
		"Desember",
	];

	const sorted = projects.sort((a, b) => {
		const byYear = b.year - a.year;
		if (byYear !== 0) return byYear;
		return months.indexOf(b.month) - months.indexOf(a.month);
	});

	return sorted;
};

export default sortProjects;
