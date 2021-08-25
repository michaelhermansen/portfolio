import CV from "types/cv";

const cv: CV = {
	skills: [
		"JavaScript/TypeScript",
		"React/Next.js",
		"HTML",
		"CSS/SCSS",
		"Figma",
		"Adobe XD",
		"Adobe Illustrator",
		"Adobe Photoshop",
		"Adobe InDesign",
	],
	education: [
		{
			title: "Matematikk R1",
			school: "ASK Privatist",
			from: {
				year: 2020,
				month: "Januar",
			},
			to: {
				now: true,
			},
		},
		{
			title: "Bachelor i grafisk design",
			school: "Høyskolen Kristiania",
			from: {
				year: 2017,
				month: "August",
			},
			to: {
				year: 2020,
				month: "Mai",
			},
		},
		{
			title: "Medier og kommunakasjon",
			school: "Glemmen VGS",
			from: {
				year: 2014,
				month: "August",
			},
			to: {
				year: 2017,
				month: "Juni",
			},
		},
	],
	work: [
		{
			role: "Butikkmedarbeider",
			employer: "Coop Mega Sjølyst",
			info: "Post, kasse og generelt butikkarbeid",
			from: {
				year: 2017,
				month: "August",
			},
			to: {
				now: true,
			},
		},
		{
			role: "Butikkmedarbeider",
			employer: "Extra Glommen Brygge",
			info: "Kasse og generelt butikkarbeid",
			from: {
				year: 2016,
				month: "Juni",
			},
			to: {
				year: 2017,
				month: "Juli",
			},
		},
	],
	voluntary: [
		{
			title: "Nettside for Dressingfabrikken",
			info: "Designet og utviklet nettsiden dressingfabrikken.no",
			from: {
				year: 2019,
				month: "Mars",
			},
			to: {
				year: 2019,
				month: "Mars",
			},
		},
		{
			title: "Grafisk designer for Studentunionen SHK",
			info:
				"Jobbet frivillig som designer for studentunionen ved Høyskolen Kristiania.",
			from: {
				year: 2018,
				month: "Januar",
			},
			to: {
				year: 2018,
				month: "Juni",
			},
		},
	],
};

export default cv;
